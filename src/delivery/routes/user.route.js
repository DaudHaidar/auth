const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')
const UserRoute = (userController) => {
    const { createUser, getAllUser, getUserById } = userController();
    router.post('/',  createUser);
    router.get('/',  getAllUser);
    router.get('/:id',  getUserById);
    return router;
}
module.exports = UserRoute;
