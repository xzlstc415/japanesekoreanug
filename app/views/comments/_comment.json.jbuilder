json.(comment, :id, :episode_id, :content, :created_at, :deleted)

json.user comment.user, :id, :name, :avatar_url

if comment.replies.any?
  json.replies comment.replies do |reply|
    json.partial! 'comment', comment: reply
  end
end
