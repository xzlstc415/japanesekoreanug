# ApplicationController
class ApplicationController < ActionController::API
  include Devise::Controllers::Helpers
  include Pundit
  include ActionController::ImplicitRender

  def pundit_user
    current_auth_user
  end
end
