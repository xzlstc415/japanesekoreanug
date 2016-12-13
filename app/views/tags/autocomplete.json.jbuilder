json.array! @tags do |tag|
  json.id tag.id
  json.name tag.name
  json.text tag.name
  json.value tag.name
end
