# TwitchUser Model
class TwitchUser < ApplicationRecord
  # Validations
  validates :api_id,
            :api_access_token,
            :api_access_token,
            :api_name,
            :user,
            presence: true
  validates :api_id, uniqueness: true

  # Relationships
  belongs_to :user
end
