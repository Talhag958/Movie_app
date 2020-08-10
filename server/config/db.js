const mongoose = require('mongoose')

const connectDb = async (Uri) =>{
    const connection =  await mongoose.connect(Uri,{
        useNewUrlParser : true,
        useCreateIndex : true,
        useFindAndModify : false,
        useUnifiedTopology : true
    })
    console.log(`MongoDb  Connected: ${connection.connection.host}`)
}

module.exports = connectDb