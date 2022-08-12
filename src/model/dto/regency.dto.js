const regency = require('../regency')

module.exports = regencyDTO = (result,index=0) =>{
    return regency(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].province_id,
        result.rows[index].created_at,
        result.rows[index].updated_at,
)}