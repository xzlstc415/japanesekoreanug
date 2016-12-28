# EpisodeType model
class EpisodeType < ApplicationRecord
  validates :name, uniqueness: true

  has_many :episodes
end
