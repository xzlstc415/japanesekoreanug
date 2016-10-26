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
json.similar_episode_ids episode.similar_episode_ids
