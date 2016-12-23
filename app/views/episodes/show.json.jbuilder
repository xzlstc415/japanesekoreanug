json.partial! 'episode', locals: { episode: @episode, current_user: @current_user }

if @episode.youtube_video
  json.youtube_video do
    json.id @episode.youtube_video.id
    json.api_title @episode.youtube_video.api_title
    json.text @episode.youtube_video.api_title
    json.value @episode.youtube_video.id
    json.api_embed_html @episode.youtube_video.api_embed_html
  end
end
