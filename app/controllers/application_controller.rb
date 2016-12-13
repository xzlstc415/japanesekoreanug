# ApplicationController
class ApplicationController < ActionController::API
  include Devise::Controllers::Helpers
  include Pundit
  include ActionController::ImplicitRender
  rescue_from ActionController::ParameterMissing, with: :show_errors

  def pundit_user
    current_auth_user
  end

  private

  def show_errors(_exception)
    render json: { error: 'some required fields are missing' }, status: :unprocessable_entity
  end
end
