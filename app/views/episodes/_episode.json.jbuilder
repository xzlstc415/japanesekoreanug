json.(episode,
      :id,
      :number,
      :comments_count,
      :name,
      :description,
      :next_episode_id,
      :previous_episode_id,
      :episode_type_id,
      :blog,
      :tag_ids)
json.published_at episode.published_at.strftime('%Y/%m/%d') if episode.published_at
json.similar_episode_ids episode.similar_episode_ids
json.type episode.episode_type.name if episode.episode_type
json.thumbnail_url episode.thumbnail.url(:thumb)
json.thumbnail_large_url episode.thumbnail.url(:regular)
if episode.tags
  json.tags episode.tags.map { |tag| { id: tag.id, name: tag.name, text: tag.name, value: tag.id } }
end
if episode.episode_type
  json.episode_type episode.episode_type.name
end
json.text episode.name
json.value episode.id
json.starred episode.liked_users.include?(current_user)
