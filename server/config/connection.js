const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/dayCampDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => console.log(err));

module.exports = mongoose.connection;