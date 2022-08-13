const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const RegencyRoute = (regencyController) => {
    console.log('tes : regency route')
    const {registerRegency,findRegency,findRegencyById} = regencyController();
    router.post('/', authMiddleware,registerRegency);
    router.get('/', authMiddleware,findRegency);
    router.get('/:id',authMiddleware, findRegencyById);
    router.get('/province/:id', authMiddleware,findRegencyById);
    return router;
}
module.exports = RegencyRoute;