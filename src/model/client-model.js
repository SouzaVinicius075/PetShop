import connection from "../configuration/connection.js";

const getClientByID = async (id) => {
    const user = await connection("clients").where({ "id_user": id }).first()
    return user
}
const insertClient = async (client) => {
    const userId = await getClientByID(client.id_user)
    if (userId) {
        return false
    }
    const user = await connection('clients').insert(client).returning('*')
    return user
}

export default { getClientByID, insertClient }