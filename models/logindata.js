const mongoose = require('mongoose')
const Logindata = new mongoose.Schema({

    firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true }
}, 

{
    timestamps: true
}

);

const logindatas = mongoose.model("logindata", Logindata) 
module.exports = logindatas