class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.belongs_to :episode, foreign_key: true
      t.belongs_to :user, foreign_key: true
      t.integer :parent_comment_id

      t.text :content

      t.timestamps
    end
  end
end
