json.array! @youtube_videos do |youtube_video|
  json.id youtube_video.id
  json.api_title youtube_video.api_title
  json.text youtube_video.api_title
  json.value youtube_video.id
end
