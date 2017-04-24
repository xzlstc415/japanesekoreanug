# Model of Episode
class Episode < ApplicationRecord
  self.per_page = 30

  has_attached_file :thumbnail,
                    styles: { thumb: '200x125^', regular: '800x^' },
                    default_url: "/assets/images/thumb_missing.png"

  # Validations
  validates :name, presence: true, uniqueness: true
  validates :episode_type, presence: true
  validates :description, presence: true, if: :published?
  validates :blog, presence: true, if: :published?
  validates :thumbnail, presence: true, if: :published?
  validates_attachment :thumbnail, size: { in: 0..1_000.kilobytes }
  validates_attachment_content_type :thumbnail, content_type: %r{\Aimage\/.*\z}

  # Callbacks
  before_validation :set_episode_number

  # Scopes
  scope :published, -> { where('published_at IS NOT NULL') }

  # Relationships
  has_many :comments, dependent: :destroy
  has_many :starred_episode_users, dependent: :destroy
  has_many :liked_users, through: :starred_episode_users, source: :user
  has_and_belongs_to_many :tags
  belongs_to :similar_episode_group
  belongs_to :episode_type

  # Methods
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
    published_at.present? && persisted?
  end

  private

  def set_episode_number
    return true if number.present?
    last_episode = Episode.last
    return self.number = 1 if last_episode.blank?
    self.number = last_episode.number + 1
  end
end
