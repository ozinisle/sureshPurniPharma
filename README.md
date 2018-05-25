# sureshPurniPharma

Download and deploy the folder to a desired location

Navigate to the folder location in command prompt and run ther server file

$ node server.js

Pre-requisites
----------------------------
Install Node JS

Install connect and serve-static with NPM

$ npm install connect serve-static
Create server.js file with this content:

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
Run with Node.js

$ node server.js
