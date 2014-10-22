/*
    Create new instance of routes manager
*/
var route = new (require('pony-router').route);

route.alternative('<:num>','(\\d+)');

route.alternative('<:file>', '.*?');

/*
    
*/
route.get('/profile/<:num>',function($, id){
    

    
    var q = new $.queue;
    
    this.response.setHeader('Content-Type','text/html');
    this.response.write('ay '+id);
    this.response.write('<link rel="stylesheet" href="/assets/css/main.css">');
    //this.response.write('<img src="/test.jpg">');
    this.response.end();
});

route.get('/assets/<:file>', function($){
    
    var self = this;
    
    var path = $.request.url;
    
    
    $.fs.readFile('.'+path, function(err, data){
        if(err){
            self.response.writeHead(404);
            self.response.write('File not found!');
        }else{
            self.response.writeHead('Content-Type', $.contentType(path));
            self.response.write(data);
        }
        
        self.response.end();
    });
    
});

route.get('/',function(){
    console.log('ay');
    this.response.end();
});

route.post('/profile',function(){
    
});

/*

route.post('/profile',function(){
    this.response.write('hahah');
});*/

module.exports = route.generate();