const express = require('express');
const router = express.Router();
const db = require('../../config/db');






const provinceRouter = require('../routes/province.route')
const provinceRepository = require('../../repository/province.repository')
const provinceController = require('../controller/province.controller')
const provinceService = require('../../service/province.service')

const regencyRouter = require('../routes/regency.route')
const regencyRepository = require('../../repository/regency.repository')
const regencyController = require('../controller/regency.controller')
const regencyService = require('../../service/regency.service')

const districtRouter = require('../routes/district.route')
const districtRepository = require('../../repository/district.repository')
const districtController = require('../controller/district.controller')
const districtService = require('../../service/district.service')

const usersRouter = require('./users.route')
const usersController = require('../controller/users.controller')
const usersService = require('../../service/users.service')
const UsersRepository = require('../../repository/users.repository')

const authRouter = require('./auth.route');
const AuthenticationController = require('../controller/authentication.controller');
const AuthenticationService = require('../../service/authentication.service');




const UsersService = (req,res,next)=>{
    req.service = userService(UsersRepository(db))
    next()
}

const ProvinceService = (req,res,next)=>{
    req.service = provinceService(provinceRepository(db))
    next()
}

const RegencyService = (req,res,next)=>{
    req.service = regencyService(regencyRepository(db))
    next()
}

const DistrictService = (req,res,next) => {
    req.service = districtService(districtRepository(db))
    next()    
}


const authService = (req, res, next) => {
    console.log('authService In')
    req.service = AuthenticationService(usersService(UsersRepository(db)));
    console.log('authService OUt')
    next()
}

console.log('index');
router.use('/init', UsersService, usersRouter(usersController))
router.use('/province', ProvinceService, provinceRouter(provinceController));
router.use('/regency', RegencyService, regencyRouter(regencyController));
router.use('/district',DistrictService,districtRouter(districtController));
router.use('/auth', authService, authRouter(AuthenticationController));

module.exports = router;

