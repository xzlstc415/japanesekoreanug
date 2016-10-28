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
      :published_at)
json.similar_episode_ids episode.similar_episode_ids
json.type episode.episode_type.name
json.tags episode.tags.map(&:name)
