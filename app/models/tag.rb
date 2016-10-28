# model of Tag
class Tag < ApplicationRecord
  has_and_belongs_to_many :episodes
end
