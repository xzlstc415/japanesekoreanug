# Auth::AuthenticationController
class Auth::AuthenticationController < ApplicationController
  before_action :authenticate_auth_user!, only: [:me]
  before_action :setup_from_twitch, only: [:twitch]
  before_action :setup_google_client, only: [:google]

  def authenticate_user
    user = User.find_for_database_authentication(email: params[:email])
    if !user.nil? && user.valid_password?(params[:password])
      render json: { token: JWTWrapper.encode(user.as_json) }
    else
      render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
    end
  end

  def me
    @user = current_auth_user
  end

  def twitch
    find_or_initialize_user
    if @user.save
      TwitchUser.create(user: @user,
                        api_id: @raw_data['_id'],
                        api_name: @raw_data['name'],
                        api_logo: @raw_data['logo'],
                        api_access_token: @access_token)
      render json: { token: JWTWrapper.encode(@user.as_json) }
    else
      render json: { errors: @user.errors.full_messages },
             status: :unauthorized
    end
  end

  def google
    @youtube_client = YoutubeClient.first || YoutubeClient.new
    @youtube_client.api_access_token = @raw_data['access_token']
    @youtube_client.api_refresh_token = @raw_data['refresh_token']
    if @youtube_client.save
      head :ok
    else
      render json: { errors: ["Sorry We can't connect with your google account"] },
             status: :unauthorized
    end
  end

  protected

  def setup_from_twitch
    data = TWITCH.auth(params[:code])
    @access_token = data[:body]['access_token']
    if !@access_token.blank?
      @raw_data = Twitch.new(access_token: @access_token).user[:body]
      twitch_user = TwitchUser.find_by_api_id(@raw_data['_id'])
      render json: { token: JWTWrapper.encode(twitch_user.user.as_json) } if twitch_user
    else
      render json: { errors: ["Sorry We can't connect with your twitch account"] },
             status: :unauthorized
    end
  end

  def setup_google_client
    auth_client = GOOGLE_CLIENT_SECRET.to_authorization
    if params[:code].present?
      auth_client.code = params[:code]
      @raw_data = auth_client.fetch_access_token!
    else
      render json: { errors: ["Sorry We can't connect with your google account"] },
             status: :unauthorized
    end
  end

  def find_or_initialize_user
    @user = User.find_or_initialize_by(email: @raw_data['email'])
    @user.name = @raw_data['name']
    @user.avatar_url = @raw_data['logo']
    @user.receive_email = true
    @user.password = SecureRandom.hex
    @user.role = :user
  end
end
