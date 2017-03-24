# EpisodeType model
class EpisodeType < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :episodes
end
