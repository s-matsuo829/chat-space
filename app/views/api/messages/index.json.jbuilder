json.array! @messages do |message|
  json.id message.id
  json.user_name message.user.name
  json.time message.created_at.strftime("%Y/%m/%d(#{@time}) %H:%M:%S")
  json.content message.content
  json.image message.image_url
end