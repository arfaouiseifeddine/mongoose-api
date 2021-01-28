const express = require("express")
const app=express()
const connect = require("./config/connectDb")

app.use(express.json());

connect();

//routes

app.use("/api/contacts", require("./routers/contact"))

const port = process.env.Port || 5000;
app.listen(port, (err) =>
err ? console.log(err) : console.log(`server port ${port}`))
;