class AddApiTitleToYoutubeVideos < ActiveRecord::Migration
  def change
    add_column :youtube_videos, :api_title, :string, after: :id
  end
end
