const mongoose = require('mongoose');

const username= "vguevara0806@gmail.com";
const password= "SproutChloBean0719";
const cluster= "cluster0.09rpopd";

const database= "dayCampDB";

const uri= `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${database}`

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => console.log(err));

module.exports = mongoose.connection;