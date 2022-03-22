const schoolData = require('../Model/model')

const cloudinary = require('../cloudinary/cloud')

const postSchool = async(req, res)=>{
    try{
        const result = await cloudinary.uploader.upload(req.file.path)
        const newSchool =  await schoolData.create({
            name: req.body.name,
            location: req.body.location,
            established: req.body.established,
            image: req.file.path,
            cloud_url: result.secure_url,
            cloud_id: result.public_id
        })
        res.status(201).json({
            status: "Successful",
            data: newSchool
        })
    }catch(error){
        res.status(404).json({
            status: "failed",
            message: error.message
        })
    }
}

module.exports = {
    postSchool
}