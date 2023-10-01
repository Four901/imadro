//npm install websocket
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    console.log((new Date()) + ' Received request for ' + request.url);
    response.writeHead(404);
    response.end();
});
server.listen(5000, function() {
    console.log((new Date()) + ' Server is listening on port 5000');
});

wsServer = new WebSocketServer({
    httpServer: server,
    // You should not use autoAcceptConnections for production
    // applications, as it defeats all standard cross-origin protection
    // facilities built into the protocol and the browser.  You should
    // *always* verify the connection's origin and decide whether or not
    // to accept it.
    autoAcceptConnections: false
});

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

wsServer.on('request', function(request) {
    console.log(request)
    if (!originIsAllowed(request.origin)) {
      // Make sure we only accept requests from an allowed origin
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    var connection = request.accept(null, request.origin)
    console.log((new Date()) + ' Connection accepted.');

    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            //connection.sendUTF(message.utf8Data); this resend the reseived message, instead of it i will send a custom message. hello from nodejs
            connection.sendUTF("Hello from node.js");
        }
        else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });



    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
});








/*
//const functions = require('firebase-functions');

//const connectToMongoose=require('./db')

//connectToMongoose();

//var cors = require('cors')//to make connection between....yes i know 
const express = require('express')

const app = express()



//app.use(cors())
app.use(express.json())




const port =process.env.PORT||5000

//routes


//app.use('/api/apartment',require('./routes/Apartment')),
//app.use('/api/auth',require('./routes/auth')),
//app.use('/api/carpenting',require('./routes/Carpenting')),
//app.use('/api/dhoodhwala',require('./routes/DhoodhWala')),
//app.use('/api/electrician',require('./routes/Electrician')),
//app.use('/api/familyhouse',require('./routes/FamilyHouse')),
//app.use('/api/housevilla',require('./routes/HouseVilla')),
//app.use('/api/maid',require('./routes/Maid')),
//app.use('/api/officestudio',require('./routes/OfficeStudio')),
//app.use('/api/plumbering',require('./routes/Plumbering')),
//app.use('/api/sweeper',require('./routes/Sweeper')),
//app.use('/api/villacondo',require('./routes/VillaCondo')),
//app.use('/api/washerman',require('./routes/WasherMan')),
//app.use('/api/watchman',require('./routes/Watchman')),
//app.use('/api/watersupplying',require('./routes/WaterSupplying')),







app.get('/', (req, res) => {
  res.send('Hello BhaiLog!')
})

app.listen(port, () => {
  console.log(`Bhaii bluerug listening on port ${port}`)
})

*/
