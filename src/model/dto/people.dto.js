const people = require('../people')

module.exports = peopleDTO = (result,index=0) =>{
    return people(
        result.rows[index].id,
        result.rows[index].nik,
        result.rows[index].name,
        result.rows[index].gender,
        result.rows[index].pob,
        result.rows[index].dob,
        result.rows[index].province_id,
        result.rows[index].regency_id,
        result.rows[index].district_id,
        result.rows[index].created_at,
        result.rows[index].updated_at,
)}