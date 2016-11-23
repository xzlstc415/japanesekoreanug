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
json.published_at episode.published_at.strftime("%b %d, %Y") if episode.published_at
json.similar_episode_ids episode.similar_episode_ids
json.type episode.episode_type.name if episode.episode_type
json.tags episode.tags.map(&:name) if episode.tags
