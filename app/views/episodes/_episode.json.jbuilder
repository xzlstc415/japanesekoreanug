json.(episode,
      :id,
      :number,
      :comments_count,
      :name,
      :starred,
      :duration,
      :description,
      :thumbnail_url,
      :next_episode_id,
      :previous_episode_id,
      :episode_type_id,
      :tag_ids)
json.published_at episode.published_at.strftime('%b %d, %Y') if episode.published_at
json.similar_episode_ids episode.similar_episode_ids
json.type episode.episode_type.name if episode.episode_type
if episode.tags
  json.tags episode.tags.map { |tag| { id: tag.id, name: tag.name, text: tag.name, value: tag.id } }
end
json.text episode.name
json.value episode.id
