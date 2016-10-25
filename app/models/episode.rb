# Model of Episode
class Episode < ApplicationRecord
  has_one :next_episode, class_name: 'Episode',
                         foreign_key: 'next_episode_id',
                         inverse_of: :previous_episode
  belongs_to :previous_episode, class_name: 'Episode',
                                foreign_key: 'next_episode_id',
                                inverse_of: :next_episode,
                                optional: true
end
