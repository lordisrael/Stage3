const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        unique:true,
        index:true,
    },
    email:{
        type:String,
        required:[true,"Input your email"],
        unique:true,
    },
    age: {
        type: Number,
        required: true,
        validate: {
          validator: function (value) {
            return value >= 0;
          },
          message: 'Age must be a non-negative integer.',
        },
    },
    mobile: {
        type: String,
        validate: {
          validator: function (value) {
            // Use a regular expression to validate a mobile phone number
            // This regex example assumes a simple format of 11 digits with optional dashes or spaces
            return /^[0-9]{11}$/.test(value);
          },
          message: 'Mobile number is not valid. It should be an 11-digit number without spaces or dashes.',
        },
    },
    country:{
        type:String,
        required:true,
    },

});

//Export the model
module.exports = mongoose.model('Person', personSchema);