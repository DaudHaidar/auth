const Response = require ('../../utils/reponse')

const ProvinceController = ( provinceService) =>{
    console.log('test controller province');
    const registerProvince = async (req,res) => {
        try{
            const payload = req.body
            const newProvince = await req.service.createProvince(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newProvince))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const findProvince = async (req,res)=>{
        console.log('tes : find province controller ')
        try{
            const province = await req.service.listProvince()
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', province))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }
    }

    const findProvinceById = async (req,res) => {
        try{
            const id = req.params.id
            const provinceId = await req.service.listProvinceId(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', provinceId))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }

    }
    
    return {registerProvince,findProvince,findProvinceById}
    
}

module.exports = ProvinceController;