//middle ware function that you can add
//to routes that you want to be protected

const jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }
}


//add to post request or any route to make it private and require a token

