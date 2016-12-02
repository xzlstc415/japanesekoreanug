# Model of Episode
class Episode < ApplicationRecord
  self.per_page = 30
  before_create :set_episode_number
  before_create :set_published_at

  scope :published, -> { where('published_at IS NOT NULL') }

  belongs_to :similar_episode_group
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags
  belongs_to :episode_type

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
end
