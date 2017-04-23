class RemoveYoutubeVideoFromEpisodes < ActiveRecord::Migration
  def change
    remove_reference :episodes, :youtube_video, index: true, foreign_key: true
  end
end
