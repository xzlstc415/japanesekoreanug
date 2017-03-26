# SimilarEpisodeGroup model
class SimilarEpisodeGroup < ApplicationRecord
  # Validations
  validates :name, presence: true, uniqueness: true

  # Relationships
  has_many :episodes

  def similar_episode_ids(episode)
    episodes.published.pluck(:id).reject do |id|
      id == episode.id
    end
  end
end
