import createUserSchema from "../validations/user-schema.js"
import { UserModel } from "../model/user-model.js"


const createUser = async (req, res) => {
    const { userEmail, userPassword } = req.body
    try {
        await createUserSchema.validate({ userEmail, userPassword })
        const userModel = new UserModel()
        const user = await userModel.getUserByEmail(userEmail);
        if (user) {
            return res.status(401).json({ "Message": "Ja possuimos cadastro com esse e-mail, deseja recuperar seu cadastro?" })
        }
        const userCreated = await userModel.insertUser(userEmail, userPassword)
        if (!userCreated) {
            return res.status(500).json({ "Message": "Problema não identificado no cadastro do usuário" })
        }
        return res.status(201).json({ "Messagem": "Usuário criado com sucesso!" })

    } catch (error) {
        return res.status(500).json({ "Message": error })
    }
}
const updateUser = async (req, res) => {

}

export default { createUser, updateUser }