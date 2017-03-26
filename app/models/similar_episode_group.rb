# SimilarEpisodeGroup model
class SimilarEpisodeGroup < ApplicationRecord
  has_many :episodes

  validates :name, presence: true, uniqueness: true

  def similar_episode_ids(episode)
    episodes.published.pluck(:id).reject do |id|
      id == episode.id
    end
  end
end
