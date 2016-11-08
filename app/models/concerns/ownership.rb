require 'active_support/concern'

module Ownership
  extend ActiveSupport::Concern

  included do
    def is_owner(object_user)
      object_user == user
    end
  end
end
