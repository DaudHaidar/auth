const DistrictService = ( districtRepository ) =>{
    console.log('test : service');

    const { create, list, listId} = districtRepository;
    const createDistrict = async(newDistrict) => {
        try{
            return await create(newDistrict)
        }catch(err){
            return err.message
        }      
    }

    const listDistrict = async() =>{
        console.log('tes : service list');
        try{
            return await list ();
        }catch(err){
            return err.message
        }
    }

    const listDistrictId = async(districtId)=>{
        try{
            return await listId(districtId)
        }catch(err){
            return err.message
        }
    }
    return {createDistrict,listDistrict,listDistrictId}
}

module.exports = DistrictService