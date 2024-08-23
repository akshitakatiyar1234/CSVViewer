
const mongoose = require('mongoose');

exports.connectMonggose =()=>{
  mongoose.connect('mongodb+srv://akshita:ak1234@cluster0.aoxpnce.mongodb.net/CSVviewer?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 50000 
  })
  .then((e)=>console.log("Connected to Mongodb =>> CSV Upload"))
  .catch((e)=>console.log("Not Connect Mongodb"))
}
