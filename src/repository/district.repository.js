const dbQuery = require('../config/db.query')
const districtDto = require('../model/dto/district.dto')

const DistrictRepository = (db) =>{
    console.log('test : repo');
    const create = async (payload) => {
        try {
            const result = await db.query(
                dbQuery().INSERT_DISTRICT, 
                [   
                    payload.id,
                    payload.name,
                    payload.district_id,
                    payload.created_at,
                    payload.updated_at

                ]);
            return districtDto(result);
        } catch (err) {
            return err.message
        }
    }

    const list = async () => {
        console.log('tes : repository list');
        try {
            const district = [];
            const result = await db.query(dbQuery().SELECT_DISTRICT);
            for (let i = 0; i < result.rows.length; i++) {
                district.push(districtDto(result, i));
            }
            return district;
        } catch (err) {
            return err.message
        }
    };

    const listId = async (id) =>{
        try{
            const result = await db.query(dbQuery().SELECT_DISTRICT_ID,[id])
            return districtDto(result)
        }catch(err){
            return err.message
        }
    }
    return {create,list,listId}
}

module.exports = DistrictRepository;