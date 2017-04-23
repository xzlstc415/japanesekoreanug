# YoutubeVideo Model
class YoutubeVideo < ApplicationRecord
  # Validations
  validates :api_id,
            :api_title,
            :api_privacy_status,
            :api_duration,
            :api_duration,
            :api_embed_html,
            :api_processed,
            presence: true
  validates :api_id, uniqueness: true

  # Callbacks
  before_save :switch_to_hq_thumbnail

  private

  def switch_to_hq_thumbnail
    api_thumbnail_url.gsub! 'default.jpg', 'mqdefault.jpg'
  end
end
