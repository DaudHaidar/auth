module.exports = province = (
    id,
    nik,
    name,
    gender,
    dob,
    pob,
    province_id,
    regency_id,
    district_id,
    created_at,
    updated_at
) => {
    return { id,nik,name,gender,pob,dob,province_id,regency_id,district_id,created_at,updated_at}
}