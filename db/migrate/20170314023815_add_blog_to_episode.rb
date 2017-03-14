class AddBlogToEpisode < ActiveRecord::Migration
  def change
    add_column :episodes, :blog, :text
  end
end
