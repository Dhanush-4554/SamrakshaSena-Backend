const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const connectDB = require('./db/connectDB');
const Routes = require('./routes/routes');
const ChatRoutes = require('./routes/ChatRoutes')


const PORT = process.env.PORT || 5000 ;
const corsoptions = {
    credentials:true,
    origin:'http://localhost:3000'
}

const app = express();
app.use(express.json());
app.use(cors(corsoptions));
app.use(cookieParser());
app.use('/api',Routes);
app.use('/chatroom',ChatRoutes);


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
