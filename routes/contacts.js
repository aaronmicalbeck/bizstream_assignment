const express = require('express');
const { restart } = require('nodemon');
const contact = require('../models/contact');
const router = express.Router();
module.exports = router;
const Contact = require('../models/contact');




// GET ALL CONTACTS

router.get('/', async (req, res)=>{
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts)
    }
    catch (err){
        res.status(500).json({ message: err.message })
    }
})



// GET ONE CONTACT

router.get('/:id', getContact,  (req, res)=>{
    res.send(res.contact);
})


// CREATING ONE CONTACT

router.post('/contacts', async (req, res)=>{
    const contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        message: req.body.message
    })

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    }
    catch (err) {
        res.status(400).json({ message: err.message});

    }

})


// UPDATING ONE CONTACT

router.patch('/:id', getContact, async (req, res) => {
    if (req.body.firstName != null){
        res.contact.firstName = req.body.firstName
    }
    if(req.body.lastName != null){
        res.contact.lastName = req.body.lastName
    }
    if(req.body.email != null){
        res.contact.email = req.body.email
    }
    if(req.body.message != null){
        res.contact.message = req.body.message
    }
    try {
        const updatedContact = await res.contact.save();
        res.json(updatedContact)
    }
    catch (err){
        res.status(400).json({ message: err.message })

    }

})


// DELETING ONE CONTACT

router.delete('/:id', getContact, async (req, res) => {

    try {
        await res.contact.remove();
        res.json({message: "Deleted contact"})
    }
    catch (err){
        res.status(500).json({ message: err.message })
    }

})


async function getContact (req, res, next){
    let contact
    try {
        contact = await Contact.findById(req.params.id)
        if (contact == null){
            return res.status(404).json({message: "Cannot find contact"})
        }
    }
    catch(err){
        res.status(500).json({ message: "Cannot find contact" })
    }

    res.contact = contact;
    next();
}






