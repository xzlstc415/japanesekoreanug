class CreateEpisodesTagsJoinTable < ActiveRecord::Migration[5.0]
  def change
    create_join_table :episodes, :tags do |t|
      t.references :episode, foreign_key: true
      t.references :tag, foreign_key: true
    end
  end
end
