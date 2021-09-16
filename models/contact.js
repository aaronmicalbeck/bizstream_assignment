const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema ({   
    
                        firstName:  { type: String, required: true, min: 1, max: 50 },
                        lastName:   { type: String, required: true, min: 1, max: 50 },
                        email:      { type: String, required: true, min: 3, max: 50 },
                        message:    { type: String, required: true, min: 1, max: 250 },
                        dateAdded:  { type: Date, default: Date.now}
                    })

  

    module.exports = mongoose.model('Contact', contactSchema);
