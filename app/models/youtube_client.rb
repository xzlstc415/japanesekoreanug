class YoutubeClient < ApplicationRecord
  # Validations
  validates :api_access_token, :api_refresh_token, presence: true
end
