const express = require('express');
const routes = express.Router();

const Verifytoken = require('../middlewares/verifyAuth');
const acessChats = require('../controllers/ChatControllers/accessChat');


// //Post Requests
routes.post('/getChat',Verifytoken,acessChats);
// route.post('/createGroup',Verifytoken,createGroupChat);

// //Get Requests
// route.get('/',Verifytoken,fetchChats);

// //put Requests
// route.put('/removeFromGroup',Verifytoken,removeFromGroup);
// route.put('/addToGroup',Verifytoken,addToGroup)

module.exports = routes;

