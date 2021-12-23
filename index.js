const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));
dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(console.log("Connected to MongoDB"))
.catch((err)=>{console.log(err)});

// app.use("/api/auth",authRoute)
app.use("/",require('./routes/complaint'))

app.listen(5000, ()=> { console.log("Backend Running");
});