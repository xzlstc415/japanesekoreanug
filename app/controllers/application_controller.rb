# ApplicationController
class ApplicationController < ActionController::API
  include Devise::Controllers::Helpers
  include Pundit

  def pundit_user
    current_auth_user
  end
end
