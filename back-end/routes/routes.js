const express = require('express');
const Model = require('../model/model');
const bcrypt = require('bcrypt');//encrpyts user passwords
const router = express.Router()

//Post Method
router.post('/post', async (req, res) => {
    //validate data before you add a user
    //encrypt the password 

    const encryptPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, encryptPassword);

    //create a new user
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})


//Get all Method
router.get('/getAll', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
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


module.exports = router;