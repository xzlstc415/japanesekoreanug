class CreateEpisodeTypes < ActiveRecord::Migration
  def change
    create_table :episode_types do |t|
      t.string :name

      t.timestamps
    end
  end
end
