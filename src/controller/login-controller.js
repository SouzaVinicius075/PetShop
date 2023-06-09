import userSchema from '../validations/user-schema.js';
import { UserModel } from '../model/user-model.js';

const loginUser = async (req, res) => {
    const { userEmail, userPassword } = req.body;
    try {
        await userSchema.validate({ userEmail, userPassword })
        const userModel = new UserModel()
        const userIsValid = await userModel.validateUser(userEmail, userPassword)
        if (!userIsValid) {
            return res.status(401).json({ "Message": "Usuário e/ou senha incorretos" })
        }

        return res.setHeader("Token", userIsValid).status(200).json({ "Message": "Usuário logado com sucesso, token deverá ser coletado no Header" })
    } catch (error) {
        return res.status(500).json(error)
    }
}

export default { loginUser }