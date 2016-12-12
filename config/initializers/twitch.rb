require 'twitch'

::TWITCH = Twitch.new({
  client_id: '2spt1bzwb5s6amg8fxnqrctif4p8p40',
  secret_key: 'g4qepyzeckjk2lr9ljgsh2iywizcl0',
  redirect_uri: 'http://localhost:3001',
  scope: ['user_read']
})

TWITCH.link
