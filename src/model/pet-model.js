import connection from "../configuration/connection.js"

const getPetByNameAndOwner = async (petName, idOwner) => {
    const getpet = await connection("pets").where({ "name": petName, "id_owner": idOwner }).first()
    return getpet;
}
const getPetById = async (id) => {
    const getPet = await connection("pets").where({ "id": id }).first()
    return getPet;
}
const insertPet = async (pet) => {
    if (await getPetByNameAndOwner(pet.name, pet.id_owner)) {
        return false
    }
    const petInserted = await connection("pets").insert(pet).returning('*')
    return petInserted
}
const updatePet = async (pet, id) => {
    if (!(await getPetById(id))) {
        return false
    }
    const petUpdated = await connection("pets").update(pet).where({ "id": id }).returning('*')
    return petUpdated
}
const deletePet = async (id) => {
    if (!(await getPetById(id))) {
        return false
    }
    const petDeleted = await connection("pets").where({ "id": id }).del().returning()
    return petDeleted
}

export default { getPetByNameAndOwner, getPetById, insertPet, updatePet, deletePet }