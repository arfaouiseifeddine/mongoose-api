const mongoose = require ("mongoose")
const config = require("config")
const connectDb = async() => {
    try {
        await mongoose.connect(config.get("MONGOURI"), { useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex : true, });
        console.log("mongoose connect")
    } catch (error) {
        console.log(err);
    }
    
};
module.exports = connectDb;