const express = require('express')

const route = express.Router()
const imageUpload = require('../Multer/multer')


const {postSchool} = require('../Controller/controller')

route.post("/sch", imageUpload, postSchool)

module.exports = route