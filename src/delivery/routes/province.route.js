const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const ProvinceRoute = (provinceController) => {
    console.log('tes : route')
    const {registerProvince,findProvince,findProvinceById} = provinceController();
    router.post('/',authMiddleware, registerProvince);
    router.get('/', authMiddleware,findProvince);
    router.get('/:id',authMiddleware, findProvinceById);
    return router;
}
module.exports = ProvinceRoute;