class RemoveThumbnailUrlFromEpisodes < ActiveRecord::Migration
  def change
    remove_column :episodes, :thumbnail_url, :string
  end
end
