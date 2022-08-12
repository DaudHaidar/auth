const Response = require ('../../utils/reponse')

const DistrictController = ( districtService) =>{
    console.log('test controller');
    const registerDistrict = async (req,res) => {
        try{
            const payload = req.body
            const newDistrict = await req.service.createDistrict(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newDistrict))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const findDistrict = async (req,res)=>{
        console.log('tes : find district controller ')
        try{
            const district = await req.service.listDistrict()
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', district))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }
    }

    const findDistrictById = async (req,res) => {
        try{
            const id = req.params.id
            const districtId = await req.service.listDistrictId(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', districtId))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }

    }
    
    return {registerDistrict,findDistrict,findDistrictById}
    
}

module.exports = DistrictController;