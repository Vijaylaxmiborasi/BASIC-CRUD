const express = require('express')
const router = express.Router()
const userController = require('../controller/usercontroller')
router.get('/get_user', userController.getUser)
router.post('/create_user',userController.createUser)
router.patch('/update_user/:id',userController.userUpdate)
router.delete('/delete_user/:id',userController.deleteUser)
module.exports = router