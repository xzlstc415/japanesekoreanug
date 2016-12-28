# YoutubeVideo Model
class YoutubeVideo < ApplicationRecord
  has_one :episode

  before_save :switch_to_hq_thumbnail

  private

  def switch_to_hq_thumbnail
    api_thumbnail_url.gsub! 'default.jpg', 'mqdefault.jpg'
  end
end
