class RemoveStarredFromEpisodes < ActiveRecord::Migration
  def change
    remove_column :episodes, :starred, :boolean
  end
end
