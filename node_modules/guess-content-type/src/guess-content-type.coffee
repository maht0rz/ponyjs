mime = require "mime"
parseURL = require("url").parse
module.exports = (url) ->
  url = parseURL url
  mediaType = mime.lookup url.pathname
  if charset = mime.charsets.lookup mediaType
    "#{mediaType}; charset=#{charset}"
  else
    mediaType