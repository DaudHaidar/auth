const DbQuery = () => {

    const INSERT_USERS = ` INSERT INTO users (username,Password) values ($1,$2) RETURNING *`
    const SELECT_USERS = ` SELECT username,password FROM users WHERE username = $1`

    const SELECT_PROVINCE = `SELECT * FROM PROVINCE`;
    const SELECT_REGENCY = `SELECT * FROM REGENCY`;
    const SELECT_DISTRICT = `SELECT * FROM DISTRICT`;
    const SELECT_PEOPLE =  `SELECT * FROM PEOPLE`;

    const SELECT_PROVINCE_ID = `SELECT*FROM PROVINCE WHERE id=$1`;
    const SELECT_REGENCY_ID= `SELECT*FROM REGENCY WHERE id=$1`;
    const SELECT_DISTRICT_ID = `SELECT*FROM DISTRICT WHERE id=$1`;
    const SELECT_PEOPLE_ID = `SELECT*FROM PEOPLE WHERE id=$1`;

    const INSERT_PROVINCE = `INSERT INTO province (id,name,created_at,updated_at) VALUES ($1,$2,$3,$4)`
    const INSERT_REGENCY = `INSERT INTO regency (id,name,province_id,created_at,updated_at) VALUES ($1,$2,$3,$4,$5)`
    const INSERT_DISTRICT = `INSERT INTO DISTRICT (id,name,regency_id,created_at,updated_at) VALUES ($1,$2,$3,$4,$5)`
    const INSERT_PEOPLE = `INSERT INTO people (nik,name, gender,dob,pob,province_id,regency_id,district_id,created_at,updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`

    return {
       SELECT_PROVINCE,SELECT_REGENCY,SELECT_DISTRICT,SELECT_PEOPLE,INSERT_PROVINCE,INSERT_REGENCY,INSERT_DISTRICT,INSERT_PEOPLE,SELECT_PROVINCE_ID,SELECT_REGENCY_ID,SELECT_DISTRICT_ID,SELECT_PEOPLE_ID,
       INSERT_USERS,SELECT_USERS
    }
}

module.exports = DbQuery
