class CreateYoutubeVideos < ActiveRecord::Migration
  def change
    create_table :youtube_videos do |t|
      t.string :api_id
      t.string :api_thumbnail_url
      t.string :api_privacy_status
      t.integer :api_duration
      t.text :api_embed_html
      t.boolean :api_processed

      t.timestamps
    end
  end
end
