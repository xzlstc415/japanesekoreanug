class CreateSimilarEpisodeGroups < ActiveRecord::Migration
  def change
    create_table :similar_episode_groups do |t|
      t.string :name

      t.timestamps
    end
  end
end
