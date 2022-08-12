const ProvinceService = ( provinceRepository ) =>{
    console.log('test : service');

    const { create, list, listId} = provinceRepository;
    const createProvince = async(newProvince) => {
        try{
            return await create(newProvince)
        }catch(err){
            return err.message
        }      
    }

    const listProvince = async() =>{
        console.log('tes : service list');
        try{
            return await list ();
        }catch(err){
            return err.message
        }
    }

    const listProvinceId = async(provinceId)=>{
        try{
            return await listId(provinceId)
        }catch(err){
            return err.message
        }
    }
    return {createProvince,listProvince,listProvinceId}
}

module.exports = ProvinceService