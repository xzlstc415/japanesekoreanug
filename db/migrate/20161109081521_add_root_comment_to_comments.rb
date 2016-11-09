class AddRootCommentToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :root, :boolean
  end
end
