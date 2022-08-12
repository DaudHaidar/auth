const dbQuery = require('../config/db.query')
const regencyDto = require('../model/dto/regency.dto')

const RegencyRepository = (db) =>{
    console.log('test : repo');
    const create = async (payload) => {
        try {
            const result = await db.query(
                dbQuery().INSERT_REGENCY, 
                [   
                    payload.id,
                    payload.name,
                    payload.province_id,
                    payload.created_at,
                    payload.updated_at

                ]);
            return regencyDto(result);
        } catch (err) {
            return err.message
        }
    }

    const list = async () => {
        console.log('tes : repository list');
        try {
            const regency = [];
            const result = await db.query(dbQuery().SELECT_REGENCY);
            for (let i = 0; i < result.rows.length; i++) {
                regency.push(regencyDto(result, i));
            }
            return regency;
        } catch (err) {
            return err.message
        }
    };

    const listId = async (id) =>{
        try{
            const result = await db.query(dbQuery().SELECT_REGENCY_ID,[id])
            return regencyDto(result)
        }catch(err){
            return err.message
        }
    }
    return {create,list,listId}
}

module.exports = RegencyRepository;