const express = require('express');
const route = express.Router()
const User = require('../models/User')
const Complaint = require('../models/Complaint')


// create 
route.post('/api/complaints', async (req,res)=>{
    const newComplaint = new Complaint(req.body);
    try{
        const savedComplaint = await newComplaint.save();
        res.status(200).json(savedComplaint);
    }catch(err){
        console.log(err);
       res.status(500).json(err) 
    }
});

//update 

route.put('/api/complaints/:id',async (req,res)=>{
    try{
        const complaint = await Complaint.findById(req.params.id);
        if(complaint.email === req.body.email){
            try{
                    const updatedComplaint = await Complaint.findByIdAndUpdate(
                        req.params.id,
                        { $set : req.body },
                        {new : true}
                        );
                res.status(200).json(updatedComplaint);
            }catch(err){
                res.status(500).json(err);        
            }
        }else{

            res.status(200).json("you can update only your complaint only");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

// Delete 
route.delete('/api/complaints/:id',async (req,res)=>{
    try{
        const complaint = await Complaint.findById(req.params.id);
        if(1){
            try{
                   await complaint.delete();
                res.status(200).json("Post Deleted");
            }catch(err){
                res.status(500).json(err);        
            }
        }else{

            res.status(200).json("you can delete only your complaint only");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

// Get Complaints by id

route.get('/api/complaints/:id',async (req,res)=>{
    try{
        const complaint = await Complaint.findById(req.params.id);
        res.status(200).json(complaint);
    }catch(err){
        res.status(500).json(err);
    }
});

// Get ALL Complaints
route.get('/api/complaints',async (req,res)=>{
    try{
        let complaints = await Complaint.find() ;
        res.status(200).json(complaints);
    }catch(err){
        res.status(500).json(err);
    }
});



module.exports = route