const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema (
    
                    {   
    
                        firstName:  { type: String, required: false, min: 1 },
                        lastName:   { type: String, required: false, min: 1 },
                        email:      { type: String, required: false, min: 3 },
                        message:    { type: String, required: false, min: 1 },
                        dateAdded:  { type: Date, default: Date.now}
                    }
            )

  

    module.exports = mongoose.model('contact', contactSchema);
