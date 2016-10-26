class CreateEpisodes < ActiveRecord::Migration[5.0]
  def change
    create_table :episodes do |t|
      t.integer :number
      t.integer :comments_count
      t.string :name
      t.boolean :starred, default: false
      t.integer :duration
      t.text :description
      t.string :thumbnail_url
      t.integer :next_episode_id
      t.integer :previous_episode_id
      t.belongs_to :similar_episode_group, foreign_key: true, index: true

      t.timestamps
    end
  end
end
