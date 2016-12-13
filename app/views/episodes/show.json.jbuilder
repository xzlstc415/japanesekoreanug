json.partial! 'episode', episode: @episode

json.youtube_video do
  json.id @episode.youtube_video.id
  json.api_title @episode.youtube_video.api_title
  json.text @episode.youtube_video.api_title
  json.value @episode.youtube_video.id
end
