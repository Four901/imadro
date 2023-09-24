const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    // Handle incoming messages (image data) from the ESP32
    console.log(`Received: ${message}`);
    
    // If you need to send commands to the Arduino
    // ws.send('Your Arduino Command');
  });

  ws.on('close', () => {
    console.log('Client disconnected');
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