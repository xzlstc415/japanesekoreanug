class AddEpisodeToYoutubeVideo < ActiveRecord::Migration
  def change
    add_reference :youtube_videos, :episode, index: true, foreign_key: true, after: :id
  end
end
