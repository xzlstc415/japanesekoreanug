require 'twitch'

::TWITCH = Twitch.new({
  client_id: Rails.application.secrets.twitch_client_id,
  secret_key: Rails.application.secrets.twitch_secret_key,
  redirect_uri: 'http://localhost:3001',
  scope: ['user_read']
})

TWITCH.link