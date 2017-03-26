# EpisodeType model
class EpisodeType < ApplicationRecord
  # Validations
  validates :name, presence: true, uniqueness: true

  # Relationships
  has_many :episodes
end
