const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const RegencyRoute = (regencyController) => {
    console.log('tes : regency route')
    const {registerRegency,findRegency,findRegencyById} = regencyController();
    router.post('/', registerRegency);
    router.get('/', findRegency);
    router.get('/:id', findRegencyById);
    router.get('/province/:id', findRegencyById);
    return router;
}
module.exports = RegencyRoute;