const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./uploads")
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname)
    }
})

const fileFilter = (req, file, cb)=>{
    const eXtName = path.extname(file.originalname)
    if(eXtName === ".png" || eXtName === ".jpeg" || eXtName === ".jpg"){
        cb(null, true)
    }else{
        cb(null, invalid)
    }
}

const imageUpload = multer({
    storage : storage,
    fileFilter : fileFilter,
    fileSize: {
        limits: 1024*1024*1024*10
    }
}).single('image')

module.exports = imageUpload