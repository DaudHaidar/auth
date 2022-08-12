const province = require('../province')

module.exports = provinceDTO = (result,index=0) =>{
    console.log('tes ; model');
    return province(
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].created_at,
        result.rows[index].updated_at,
)}