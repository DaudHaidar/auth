const LeaveService = (leaveRepository) =>{
    const { getAllLeave, createLeave} = leaveRepository
    const findAllLeave = async () =>{

        try{
            return await getAllLeave()
        }catch(err){
            return err.message
        }
    }
    const registerLeave = async(newLeave) =>{
        try{ 
            return await createLeave(newLeave)
        }catch(err){
            return err.message}
    }
    return {findAllLeave,registerLeave}
} 

module.exports = LeaveService