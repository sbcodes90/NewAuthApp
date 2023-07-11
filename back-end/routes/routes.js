const express = require('express');
const User = require('../model/User');
const bcrypt = require('bcrypt');//encrpyts user passwords
const { userValidation } = require('../validation');
const jwt = require('jsonwebtoken');

const router = express.Router()

//POST Method
router.post('/post', async (req, res) => {

    //validate data before you add a user
    const { error } = userValidation(req.body)
   
    //if we have a error from our validation dont create new user
    if (error) return res.status(400).send(error.details[0].message)
    
    //check if user exists
    const emailExist = await User.findOne({email: req.body.email})

    if(emailExist) return res.status(400).send('Email already exists');

    //encrypt the password 
    const encryptPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, encryptPassword);

    //create a new user
    const data = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


//Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await User.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

//Update by ID Method
router.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})


//LOG IN
router.post('/login', async (req, res) => {
//jwt a token that remembers that your logged in
const token = jwt.sign({_id: User._id}, process.env.TOKEN_SECRET);
res.header('auth-token', token).send(token);
})



module.exports = router;