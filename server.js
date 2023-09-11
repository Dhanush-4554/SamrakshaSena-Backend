const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db/connectDB');

const PORT = process.env.PORT || 5000 ;

const app = express();
app.use(express.json());
app.use(cors());


const start = async () => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(PORT , ()=>{
            console.log(`Server on ${PORT}`);
        });
    }
    catch (err) {
        console.log(err);
    }
}
start();
