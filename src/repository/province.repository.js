const dbQuery = require('../config/db.query')
const provinceDto = require('../model/dto/province.dto')

const ProvinceRepository = (db) =>{
    console.log('test : repo');
    const create = async (payload) => {
        try {
            const result = await db.query(
                dbQuery().INSERT_PROVINCE, 
                [
                    payload.id,
                    payload.name,
                    payload.created_at,
                    payload.updated_at
                ]);
            return provinceDto(result);
        } catch (err) {
            return err.message
        }
    }

    const list = async () => {
        console.log('tes : repository list');
        try {
            const province = [];
            const result = await db.query(dbQuery().SELECT_PROVINCE);
            for (let i = 0; i < result.rows.length; i++) {
                province.push(provinceDto(result, i));
            }
            return province;
        } catch (err) {
            return err.message
        }
    };

    const listId = async (id) =>{
        try{
            const result = await db.query(dbQuery().SELECT_PROVINCE_ID,[id])
            return provinceDto(result)
        }catch(err){
            return err.message
        }
    }
    return {create,list,listId}
}

module.exports = ProvinceRepository;