class CreateSimilarEpisodeGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :similar_episode_groups do |t|
      t.string :name
      
      t.timestamps
    end
  end
end
