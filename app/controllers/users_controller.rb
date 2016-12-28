# UsersController
class UsersController < ApplicationController
  before_action :authenticate_auth_user!, only: [:update]

  def update
    @user = current_auth_user
    if @user.update_attributes(user_params)
      render json: { token: JWTWrapper.encode(@user.as_json) }
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :password,
      :password_confirmation,
      :avatar
    )
  end
end
