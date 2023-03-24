const mongoose=require('mongoose')
async function getConnection(){
    await mongoose.connect('mongodb+srv://Chandini_S:Crystal0212@cluster0.l2pby5u.mongodb.net/Event?retryWrites=true&w=majority')
}
module.exports=getConnection;