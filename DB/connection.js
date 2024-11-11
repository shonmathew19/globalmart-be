const mongoose = require('mongoose');
const connection_string = process.env.MONGO_URL

mongoose.connect(connection_string).then((res)=>{
    console.log('MongoDB connected successfully')
}).catch((err)=>{
    console.log(err)
})