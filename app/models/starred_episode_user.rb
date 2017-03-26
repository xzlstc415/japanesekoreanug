class StarredEpisodeUser < ActiveRecord::Base
  # Relationships
  belongs_to :episode
  belongs_to :user
end
