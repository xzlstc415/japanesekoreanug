# model of Tag
class Tag < ApplicationRecord
  # Validations
  validates :name, presence: true, uniqueness: true

  # Relationships
  has_and_belongs_to_many :episodes
end
