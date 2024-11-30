const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { expressjwt: exjwt } = require('express-jwt');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const secretKey = 'KEY';
const jwtMWare = exjwt({
    secret: secretKey,
    algorithms: ['HS256']
});

app.use(cors({
    origin: 'http://localhost:3001', // Allow requests from React app
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type,Authorization',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// ------------- AUTHENTICATION --------------------

let users = [
    {
        id: 1,
        username: 'jessy',
        password: 'jessy'
    },
    {
        id: 2,
        username: 'jessica',
        password: 'jessica'
    },
]


app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // User found
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '3m' });
        res.json({
            success: true,
            err: null,
            tokenValue: token
        });
    } else {
        // incorrect credentials
        res.status(401).json({
            success: false,
            token: null,
            err: 'Username or Password is incorrect!',
        });
    }
});

app.get('/api/dashboard', jwtMWare, (req, res) => {
    res.json({ success: true});
});

app.get('/api/summary', jwtMWare, (req, res) => {
    res.json({ success: true });
});

app.get('/api/reports', jwtMWare, (req, res) => {
    res.json({ success: true });
});


// to determine if this is needed - watch 25:00 in jwt video
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({
            success: false,
            officialError: err,
            err: 'Username or password is incorrect 2'
        });
    }
    else {
        next(err);
    }
});

// ------------- DATABASE --------------------

const uri = "mongodb+srv://jgille16:opk25ZkWjaq4Vo1x@mongoj64.ynetd.mongodb.net/?retryWrites=true&w=majority&appName=mongoj64";

const client = new MongoClient(uri);


// ************  Endpoint for Summary Page
app.get('/api/siteData', async (req, res) => {
    await client.connect(); 
    const database = client.db('CovidFluData');
    const collection = database.collection('Sites');
  
    const siteData = await collection.find({}).toArray();
    res.json({ siteChart: siteData });
    await client.close();
  });

// ************  Endpoint for Reports Page
  app.get('/api/patientData', async (req, res) => {
    await client.connect(); 
    const database = client.db('CovidFluData');
    const collection = database.collection('Patients');
  
    const patientData = await collection.find({}).toArray();
    res.json({ patientChart: patientData });
    await client.close();
  });




//  ------------- SERVING --------------------
const path = require('path');

// Serve the React app's static files
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Catch-all route to serve React's index.html for any unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});




app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});

