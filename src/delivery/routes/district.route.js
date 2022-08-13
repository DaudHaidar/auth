const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const DistrictRoute = (districtController) => {
    console.log('tes : route')
    const {registerDistrict,findDistrict,findDistrictById} = districtController();
    router.post('/', authMiddleware,registerDistrict);
    router.get('/', authMiddleware,findDistrict);
    router.get('/:id',authMiddleware, findDistrictById);
    router.get('/regency/:id', authMiddleware,findDistrictById);
    return router;
}
module.exports = DistrictRoute;