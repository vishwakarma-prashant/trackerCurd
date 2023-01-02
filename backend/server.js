const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
mongoose.set('strictQuery', true);

//mongoDb
// console.log(process.env.ATLS_URI)
// mongoose.connect("mongodb+srv://Admin123:<password>>cluster0.33knwnl.mongodb.net/?retryWrites=true&w=majority", {}).then((result) => {
//         //console.log(result)
//     }).catch((err) => {
//         //console.log(err)
//     })
mongoose.connect("mongodb://localhost:27017")

// mongoose.connect(process.env.ATLS_URI).then(() => {
//     console.log('no error')
// }).catch((err) => {
//     console.log(err)
// })


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("connection  is build by mogoDb")
})




const exerciseRouter = require("./routes/exercises")
const usersRouter = require("./routes/user")

app.use("/exercises", exerciseRouter);
app.use("/users", usersRouter);





app.listen(process.env.PORT || 5000, () => {
    console.log("server is runing on  5000");
});

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))