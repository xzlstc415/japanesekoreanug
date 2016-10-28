# Model of Episode
class Episode < ApplicationRecord
  belongs_to :similar_episode_group, optional: true
  has_many :comments, dependent: :destroy
  has_and_belongs_to_many :tags
  belongs_to :episode_type

  def similar_episode_ids
    return [] if similar_episode_group.nil?
    similar_episode_group.similar_episode_ids(self)
  end
end
