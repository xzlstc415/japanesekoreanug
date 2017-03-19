json.array! @tags do |tag|
  json.partial! 'tag', tag: tag
  json.episodes_count tag.episodes.published.count
end
