/*
    Application bootstraping function
*/
var app = function(configs, dependencies){
    
    var fs = require('fs');
    
    /*
        Bootstrap dependencies
    */
    var queue = require('pony-queue');
    var server = new (require('pony-server'))();
    var router = new (require('pony-router').dispatcher)();
    var routes = (require('./app/routes.js')).routes;
    var alternatives = (require('./app/routes.js')).alternatives;
    
    /*
        Bootstrap queuees
    */
    var q = {};
    q.cfg = new queue;
    
    /*
        Everything about your app is kept here
    */
    var app = {};
        
    /*
        Config objects for your app will be stored here
    */
    app.cfg = {};
    
    /*
        Injecting dependencies into your app
    */
    for(dependency in dependencies){
        app[dependency] = dependencies[dependency];
    }
    
    /*
        Load all the config objects into config object
    */
    for(config in configs){
        q.cfg.add(function(next){
            fs.readFile(configs[config], 'utf-8', function(err, data){
                if(err) throw err;
                
                app.cfg[config] = JSON.parse(data);
                next();
            });
        });
    }
    
    /*
        Config loading queue callback, start all the 
        required components, with proper configurations
    */
    q.cfg.start(true, function(){
        
       routes = router.parse(routes, alternatives);
       
        /*
            You may edit config options here,
            $ -> app passed to the server, carrying around
            dependencies and config info
        */
       server.start(app,function($, request, response){
           
           
           /*
                Router dispatch method is used to handle
                requests. $ -> app is passed to the dispatcher,
                and dispatcher makes it available for every called
                route method.
           */
           router.dispatch($, routes, request, response);
       });
    });
};

module.exports = app;



