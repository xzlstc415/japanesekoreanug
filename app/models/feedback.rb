# Feedback model
class Feedback < ActiveRecord::Base
  # Validations
  validates :name, :email, :content, presence: true
end
