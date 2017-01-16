# Model of Episode
class Episode < ApplicationRecord
  self.per_page = 30
  before_create :set_episode_number, :set_published_at
  before_save :initialize_from_youtube_video

  scope :published, -> { where('published_at IS NOT NULL') }

  belongs_to :similar_episode_group
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags
  belongs_to :episode_type
  belongs_to :youtube_video
  has_many :starred_episode_users, dependent: :destroy
  has_many :liked_users, through: :starred_episode_users, source: :user

  def similar_episode_ids
    return [] if similar_episode_group.nil?
    similar_episode_group.similar_episode_ids(self)
  end

  def publish!
    self.published_at = Date.current
    save
  end

  def unpublish!
    self.published_at = nil
    save
  end

  def published?
    !published_at.nil?
  end

  private

  def set_episode_number
    last_episode = Episode.last
    return self.number = 1 if last_episode.blank?
    self.number = last_episode.number + 1
  end

  def set_published_at
    self.published_at = Date.current
  end

  def initialize_from_youtube_video
    self.thumbnail_url = youtube_video.api_thumbnail_url
    self.duration = youtube_video.api_duration
    self.name = youtube_video.api_title if name.blank?
    self.description = youtube_video.api_description if description.blank?
  end
end
