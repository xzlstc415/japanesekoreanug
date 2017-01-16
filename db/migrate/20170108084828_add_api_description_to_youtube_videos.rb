class AddApiDescriptionToYoutubeVideos < ActiveRecord::Migration
  def change
    add_column :youtube_videos, :api_description, :text, after: :api_title
  end
end
