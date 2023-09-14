const AgencyLocations = require('../models/agencyLoactions');
const AgencyAdmin = require('../models/agencyAdmin');
require('dotenv').config();


const getAgencyLoactions = async (req, res) => {
    const Locations = await AgencyLocations.find({});
    // const LocationMap = {}
    // Locations.forEach((user) => {
    //     LocationMap[user._id] = user;
    // });
    return res.status(200).json({ AllLocation: Locations })
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

module.exports = {getAgencyLoactions,getAdmin};
