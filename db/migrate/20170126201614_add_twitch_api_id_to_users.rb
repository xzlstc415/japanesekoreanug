class AddTwitchApiIdToUsers < ActiveRecord::Migration
  def change
    add_column :users, :twitch_api_id, :string
  end
end
