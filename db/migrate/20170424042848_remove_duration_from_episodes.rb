class RemoveDurationFromEpisodes < ActiveRecord::Migration
  def change
    remove_column :episodes, :duration, :int
  end
end
