var Q = require('pony-queue');
var queue = new Q;
var fs = require('fs');

queue.add(function(next){
   fs.readFile('config.json','utf-8', function(err, data){
       console.log(data);
       next();
   });
});

queue.add(function(next){
   console.log('What is the meaning of life?');
   next();
});

queue.add(function(next){
   console.log('Answer is 42');
   next();
});

queue.start(true, function(){
    console.log('Config loaded, question answered!');
});