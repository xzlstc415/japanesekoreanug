class RemoveTwitchApiIdFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :twitch_api_id, :string
  end
end
