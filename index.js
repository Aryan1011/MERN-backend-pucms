const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

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

app.listen(3000, ()=> { console.log("Backend Running");
});