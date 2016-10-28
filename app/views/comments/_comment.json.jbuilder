json.(comment, :id, :episode_id, :content, :created_at)

if comment.replies.any?
  json.replies comment.replies do |reply|
    json.partial! 'comment', comment: reply
  end
end
