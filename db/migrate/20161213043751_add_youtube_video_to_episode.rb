class AddYoutubeVideoToEpisode < ActiveRecord::Migration
  def change
    add_reference :episodes, :youtube_video, index: true, foreign_key: true, after: :id
  end
end
