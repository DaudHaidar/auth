const RegencyService = ( regencyRepository ) =>{
    console.log('test : service');

    const { create, list, listId} = regencyRepository;
    const createRegency = async(newRegency) => {
        try{
            return await create(newRegency)
        }catch(err){
            return err.message
        }      
    }

    const listRegency = async() =>{
        console.log('tes : service list');
        try{
            return await list ();
        }catch(err){
            return err.message
        }
    }

    const listRegencyId = async(regencyId)=>{
        try{
            return await listId(regencyId)
        }catch(err){
            return err.message
        }
    }
    return {createRegency,listRegency,listRegencyId}
}

module.exports = RegencyService