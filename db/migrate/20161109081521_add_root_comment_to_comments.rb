class AddRootCommentToComments < ActiveRecord::Migration
  def change
    add_column :comments, :root, :boolean
  end
end
