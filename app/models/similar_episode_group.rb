# SimilarEpisodeGroup model
class SimilarEpisodeGroup < ApplicationRecord
  has_many :episodes

  def similar_episode_ids(episode)
    episode_ids.reject do |id|
      id == episode.id
    end
  end
end
