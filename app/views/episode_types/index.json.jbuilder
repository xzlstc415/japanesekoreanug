json.array! @episode_types do |episode_type|
  json.partial! 'episode_type', episode_type: episode_type
  json.episodes_count episode_type.episodes.published.count
end
