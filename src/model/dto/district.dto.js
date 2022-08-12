const district = require('../district')

module.exports = districtDTO = (result,index=0) =>{
    return district(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].regency_id,
        result.rows[index].created_at,
        result.rows[index].updated_at,
)}