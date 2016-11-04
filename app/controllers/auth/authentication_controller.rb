# Auth::AuthenticationController
class Auth::AuthenticationController < ApplicationController
  before_action :authenticate_auth_user!, only: [:me]
  before_action :setup_from_twitch, only: [:twitch]

  def authenticate_user
    user = User.find_for_database_authentication(email: params[:email])
    if !user.nil? && user.valid_password?(params[:password])
      render json: { token: JWTWrapper.encode(user.attributes) }
    else
      render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
    end
  end

  def me
    @user = current_auth_user
  end

  def twitch
    @user = User.new(name: @raw_data['name'],
                     password: SecureRandom.hex,
                     email: @raw_data['email'],
                     avatar_url: @raw_data['logo'],
                     receive_email: true)

    if @user.save
      TwitchUser.create(user: @user,
                        api_id: @raw_data['_id'],
                        api_name: @raw_data['name'],
                        api_logo: @raw_data['logo'],
                        api_access_token: @access_token)
      render json: { token: JWTWrapper.encode(@user.attributes) }
    else
      render json: { errors: ["We can't connect with your twitch account"] }, status: :unauthorized
    end
  end

  protected

  def setup_from_twitch
    data = TWITCH.auth(params[:code])
    @access_token = data[:body]['access_token']
    @raw_data = Twitch.new(access_token: @access_token).user[:body]
    twitch_user = TwitchUser.find_by_api_id(@raw_data['_id'])
    if twitch_user
      render json: { token: JWTWrapper.encode(twitch_user.user.attributes) }
    end
  end
end
