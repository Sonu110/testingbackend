const Mongoose= require("mongoose")
const logindatas = require('../models/logindata')

 async function main (req, res) {
  
  const{name,email,password}= req.body

  try
  {
    const data = await logindatas.create({
      firstname: name,
      email: email,
      password: password 
    });
    console.log("success");
    res.json(data);
  }
  catch(e)
  {
    console.error(e);
    res.status(442).json(e);
  }


  }


  async function Alldata(req,res) {
    try
    {
        const data = await logindatas.find()
        res.json(data)
    }
    catch(e)
    {
      res.status(400).json(e)
    }
    
  }
  async function Iddata(req,res) {

    const {id}= req.params
    console.log("the id is ",id);
    try
    {
        const data = await logindatas.findOne({ _id: id });
        res.json(data)
    }
    catch(e)
    {
      res.status(500).json(e)
    }
    
  }

  async function Detele(req,res) {

    const {id}= req.params
    console.log("the id is ",id);
    try
    {
        const data = await logindatas.deleteOne({ _id: id });
        res.json(data)
    }
    catch(e)
    {
      res.status(500).json(e)
    }
    
  }


  async function update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;
  
    try {
      // Using findOneAndUpdate to find and update the document
      const updatedData = await logindatas.findOneAndUpdate(
        { _id: id },
        { $set: { firstname: name, email: email, password: password } },
        { new: true } // Returns the modified document
      );
  
      if (updatedData) {
        // Sending a custom header (e.g., 'X-Custom-Header')
        res.setHeader('X-Custom-Header', 'Your custom value');
  
        // Sending a boolean flag in the response body
        res.json({
          success: true,
          data: updatedData
        });
      } else {
        res.status(404).json({ success: false, message: 'User not found' });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ success: false, error: e.message });
    }
  }





module.exports = {main ,Alldata ,Iddata ,Detele ,update}