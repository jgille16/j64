const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { expressjwt: exjwt } = require('express-jwt');

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

// ---------------------------------

let users = [
    {
        id: 1,
        username: 'jessy',
        password: 'jessy'
    },
    {
        id: 2,
        username: 'fabio',
        password: 'fabio'
    },
]

// ---------------------------------

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the array
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // User found
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '2m' });
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
    res.json({
        success: true,
    });
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

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`)
});

