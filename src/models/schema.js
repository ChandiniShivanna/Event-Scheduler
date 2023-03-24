const mongoose=require('mongoose')
const models=new mongoose.Schema({
    title:{type : String, required:true},
    description:{type:String,required:true},
    location:{type:String,required:true},
    startTime:{type:String,required:true},
    endTime:{type:String,required:true}
},{timestamps:true});
const Event=mongoose.model('Event',models)
module.exports=Event;