json.(comment, :id, :episode_id, :content, :deleted, :created_at)

json.created_at_in_words time_ago_in_words(comment.created_at)

json.user comment.user, :id, :name, :avatar_url

if comment.replies.any?
  json.replies comment.replies do |reply|
    json.partial! 'comment', comment: reply
  end
end
