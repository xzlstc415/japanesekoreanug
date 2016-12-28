class AddAvatarToUsers < ActiveRecord::Migration
  def up
    add_attachment :users, :avatar
  end

  def down
    remove_attatchment :users, :avatar
  end
end
