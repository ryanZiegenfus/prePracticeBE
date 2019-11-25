const express = require('express');
const router = express.Router();
const Users = require('../models/users_model');

router.use(express.json());

router.get('/', (req, res) => {
    //db request and response handled here
    //which Model file and property i.e Users.find()
    // .then and .catch functions
    Users.find()
    .then(users => {
        res.status(200).json({users})
    })
    .catch(() => {
        res.status(500).json({ message: 'Error, check back end'})
    })
})

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
    .then(user => {
        res.status(200).json({user})
    })
    .catch(() => {
        res.status(500).json({ message: 'Error, check back end'})
    })
})

router.post('/', (req, res) => {
    //db request and response handled here
    console.log(req.body)
    Users.add(req.body)
    .then(user => {
        res.status(201).json({user})
    })
    .catch(() => {
        res.status(500).json({ message: 'Error, check back end'})
    })
})

router.put('/:id', (req, res) => {
    //db request and response handled here
    Users.update(req.body, req.params.id)
    .then(user => {
        res.status(201).json({ user })
    })
    .catch(() => {
        res.status(500).json({ message: 'Error, check back end'})
    })

})

router.delete('/:id', (req, res) => {
    //db request and response handled here
    Users.remove(req.params.id)
    .then(deleted => {
        res.status(204).json({ deleted })
    })
    .catch(() => {
        res.status(500).json({ message: 'Error, check back end'})
    })
})



module.exports = router