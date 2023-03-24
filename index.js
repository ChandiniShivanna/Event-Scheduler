const express=require('express')
const bodyparser=require('body-parser')
const app=express()
const Event=require('./src/models/schema')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded())

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.post("/api/v1/users",async(req,res)=>{
    try{
        const user=await Event.create(req.body)
        res.status(201).json({
            status:"Success",
            user
        }) 
    }catch(e){
        res.status(500).json({
            status:"Failure",
            message:e.message
        })
        console.log(e.message);
    }
});

app.get("/api/v1/events",async(req,res)=>{
    try{
        const users=await Event.find({});
        res.status(200).json({
            status:"success",
            users
        })
    }catch(e){
            res.status(404).json({
                status:"Failed",
                message:e.message
            })
            console.log(e.message);
        }
});

app.get("/api/v1/events/:id",async(req,res)=>{
    try{
        const users=await Event.find({_id:req.params})
    res.status(200).json({
        status:"Success",
        users
    })
    }catch(e){
        res.status(404).json({
            status:"Failed",
            message:e.message
        })
    }
})
app.delete("/api/v1/events/:id",async(req,res)=>{
    try{
        const users=await Event.deleteOne({_id:req.params.id},req.body)
        res.status(204).json({
            status:"Success",
            message:e.message
        })
    }catch(e){
            res.status(400).json({
                status:"Failed",
                message:e.message
            })
    }
})

app.put("/api/v1/events/:id",async(req,res)=>{
    try{
        await Event.updateOne({_id:req.params.id},req.body)
        res.status(200).json({
            status:"Success",
            message:e.message
        })
    }catch(e){
        res.status(400).json({
            status:"Failed",
            message:e.message
        })
    }
})

app.get("*",(req,res)=>{
    res.status(400).send("Event not found")
})
app.listen(3001,async()=>{
    await mongoose.connect('mongodb+srv://Chandini_S:Crystal0212@cluster0.l2pby5u.mongodb.net/Event?retryWrites=true&w=majority')
    console.log("DataBase Connected");
    console.log("port is started");
})