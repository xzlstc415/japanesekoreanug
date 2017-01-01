class UpdateYoutubeClients < ActiveRecord::Migration
  def change
    remove_column :youtube_clients, :api_client_id, :string
    remove_column :youtube_clients, :api_redirect_uri, :string

    add_column :youtube_clients, :api_refresh_token, :string
  end
end
