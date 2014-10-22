guess = require "../"

assert = require "assert"

guesses =
  "a.txt":                        "text/plain; charset=UTF-8"
  "b.html":                       "text/html; charset=UTF-8"
  ".jpg":                         "image/jpeg"
  ".unknown-type":                "application/octet-stream"
  "/":                            "application/octet-stream"
  "/some/path":                   "application/octet-stream"
  "http://google.com/abc.html":   "text/html; charset=UTF-8"
  "http://google.com/abc.html?q": "text/html; charset=UTF-8"
  "http://google.com/abc.gif?q":  "image/gif"
  
describe "guess-content-type", ->
  it "guesses content types", ->
    assert.equal ouput, guess input for input, output in guesses 