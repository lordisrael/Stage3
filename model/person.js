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
    },
    mobile:{
        type:String,
        required:[true, "Input your Mobile number"],
        unique:true,
    },
    country:{
        type:String,
        required:true,
    },

});

//Export the model
module.exports = mongoose.model('Person', personSchema);