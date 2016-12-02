class RemoveRootFromComments < ActiveRecord::Migration
  def change
    remove_column :comments, :root
  end
end
