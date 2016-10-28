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
      :previous_episode_id)
json.published_at episode.published_at.strftime("%b %d, %Y")
json.similar_episode_ids episode.similar_episode_ids
json.type episode.episode_type.name
json.tags episode.tags.map(&:name)
