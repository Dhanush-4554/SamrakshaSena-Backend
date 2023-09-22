const AgencyLocations = require('../models/agencyLoactions');
const AgencyAdmin = require('../models/agencyAdmin');
const { populate } = require('dotenv');
require('dotenv').config();


const getAgencyLoactions = async (req, res) => {
    const Locations = await AgencyLocations.find({});
    // const LocationMap = {}
    // Locations.forEach((user) => {
    //     LocationMap[user._id] = user;
    // });
    return res.status(200).json({ AllLocation: Locations })
}

const getEveryThing = async (req, res) => {
    const All = await AgencyAdmin.find();

    return res.status(200).json(All);
}

const getAdmin = async(req,res)=>{
    const userId = req.id;
    try {
        const Admin = await AgencyAdmin.findById(userId,'-AgencyPassword');

        Admin ? res
                .status(200)
                .json({Admin})
             : res
                .status(404)
                .json({message:'User Not Found'});

    } catch (error) {
        console.log(error)
    }
}

const getAllAgency = async(req,res)=>{
    const userId = req.id;
    const keyword = req.query.search ? {
        $or:[
            {AgencyName:{$regex:req.query.search , $options:'i'}},
            {AgencyEmail:{$regex:req.query.search , $options:'i'}} // Find the user by Name or email using query
        ]
    } : null

    const agencies = await AgencyAdmin.find(keyword).find({_id:{$ne:userId}}); //This is to get all Agency Accept the logged in One

    return res.status(200).json({agencies});
}


module.exports = {getAgencyLoactions,getAdmin,getAllAgency,getEveryThing};
