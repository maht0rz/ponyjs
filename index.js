var pony = require('./pony');

var app = new pony({
    //config:path
    "server": "./config/server.json",
}, {
    //dependency: content
    "queue": require('pony-queue'),
    "fs": require('fs'),
    "contentType": require('guess-content-type')
});

