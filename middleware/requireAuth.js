const jwt = require('jsonwebtoken');

const User = require('../models/userModel')

const requireAuth = async (req,res,next) => {
    const {autthorization} = req.headers
    

    

    if(!autthorization) {
        return res.status(401).json({error:"token is required"})
    }
    const token = autthorization.split(' ')[1]

    
    try{
       const {_id} = jwt.verify(token , process.env.SECRET)

       req.user = await User.findOne({_id}).select('_id')
       next()

    }catch(err){
        
        console.log(err)
        res.status(401).json({error:"requst not authorized"})
    }
}

module.exports = requireAuth