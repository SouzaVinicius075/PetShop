import clientModel from "../model/client-model.js";
import clientSchema from "../validations/client-schema.js"
const createClient = async (req, res) => {
    try {
        await clientSchema.validate(req.body)
        req.body.id_user = req.user.id
        const { ...client } = req.body
        client.id_user = req.user.id
        const insertUser = await clientModel.insertClient(client)
        if (!insertUser) {
            return res.status(401).json({ "Message": "Cliente ja registrado em nossa base de dados" })
        }

        return res.status(201).json({ "Message": "Cliente cadastrado com sucesso" })
    } catch (error) {
        return res.status(500).json({ "Message": error.message })
    }
}


export default { createClient }