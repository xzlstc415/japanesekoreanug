class CreateTwitchUsers < ActiveRecord::Migration
  def change
    create_table :twitch_users do |t|
      t.belongs_to :user, foreign_key: true
      t.string :api_access_token
      t.string :api_name
      t.string :api_logo
      t.string :api_id

      t.timestamps
    end
  end
end
