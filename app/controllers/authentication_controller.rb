# AuthenticationController
class AuthenticationController < ApplicationController

  def authenticate_user
    user = User.find_for_database_authentication(email: params[:email])
    if !user.nil? && user.valid_password?(params[:password])
      render json: JWTWrapper.encode(user.attributes)
    else
      render json: { errors: ['Invalid Username/Password'] }, status: :unauthorized
    end
  end
end
