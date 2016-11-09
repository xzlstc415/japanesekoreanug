json.(comment, :id, :episode_id, :content, :deleted)

json.created_at time_ago_in_words(comment.created_at)

json.user comment.user, :id, :name, :avatar_url

if comment.replies.any?
  json.replies comment.replies do |reply|
    json.partial! 'comment', comment: reply
  end
end
