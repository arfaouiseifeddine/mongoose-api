const express = require("express")
const router = express.Router()
const Contact= require ("../models/Contact")

//post
router.post("/add", async (req,res)=>{
    const  {name , email , phone} = req.body;

    try {
        const newContact = new Contact ({
            name,
            email,
            phone,
        });
        const contact = await  newContact.save();
        res.json({msg:"contact add", contact});
    } catch (error) {
        console.log(error)
    };
});
// get
router.get("/" , async (req,res) => {

    try {
        const contacts = await Contact.find();
        res.json({msg : "data ", contacts});
    } catch (error) {
        console.log(error);        
    }

})
//delete
router.delete("/delete/:id", async (req,res)=> {
    const {id}=req.params;
    try {
        const contact = await Contact.findOneAndDelete({_id:id})
        res.json({msg : "contact delete", contact})
    } catch (error) {
        console.log(error);
    }
})

//get contact by id 
router.get ("/:_id" , async (req,res) => {
    const {_id} =req.params
    try {
        const contact = await Contact.findById(_id)
        res.json({msg : "contact by id", contact})
    } catch (error) {
        console.log(error);
    }
})


//edit 

router.put ("/edit/:_id" , async (req,res) => {
    const {_id} =req.params;
    try {
        const editcontact = await Contact.findOneAndUpdate(
            {_id}, {$set : req.body});
            
        res.json({msg : "edit contact ", editcontact});
    } catch (error) {
        console.log(error);
    }
});

module.exports= router;