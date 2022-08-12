const Response = require ('../../utils/reponse')

const RegencyController = ( regencyService) =>{
    console.log('test controller');
    const registerRegency = async (req,res) => {
        try{
            const payload = req.body
            const newRegency = await req.service.createRegency(payload)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', newRegency))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message));
        }
    }

    const findRegency = async (req,res)=>{
        console.log('tes : find regency controller ')
        try{
            const regency = await req.service.listRegency()
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', regency))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }
    }

    const findRegencyById = async (req,res) => {
        try{
            const id = req.params.id
            const regencyId = await req.service.listRegencyId(id)
            res.json(Response().successMessage(res.statusCode, 'SUCCESS', regencyId))
        }catch(err){
            res.json(Response().errorMessage('XX', err.message))
        }

    }
    
    return {registerRegency,findRegency,findRegencyById}
    
}

module.exports = RegencyController;