# TwitchUser Model
class TwitchUser < ApplicationRecord
  belongs_to :user

  validates :api_id, uniqueness: true
end
