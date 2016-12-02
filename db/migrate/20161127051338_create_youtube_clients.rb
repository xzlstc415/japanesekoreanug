class CreateYoutubeClients < ActiveRecord::Migration
  def change
    create_table :youtube_clients do |t|
      t.string :api_client_id
      t.string :api_access_token
      t.string :api_redirect_uri

      t.timestamps
    end
  end
end
