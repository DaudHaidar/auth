const leave = require ('../leave')

module.exports = leaveDTO = (result,index=0) =>{
    return leave (
        result.rows[index].id,
        result.rows[index].type,
        result.rows[index].name
    )
}