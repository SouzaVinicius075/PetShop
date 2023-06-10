import jwt from 'jsonwebtoken';
import { UserModel } from '../model/user-model.js'

const validacaoToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ mensagem: 'Usuário não autorizado!' });
    }

    try {
        let token = authorization.replace('Bearer ', '').trim();
        const { id } = jwt.verify(token, process.env.PASSWORDJWT);
        const userModel = new UserModel()

        const identificacaoUsuario = await userModel.getUserById(id);
        if (!identificacaoUsuario) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
        }
        let { senha, ...usuario } = identificacaoUsuario;
        req.usuario = usuario;

        next();
    } catch (error) {
        return res.status(401).json({
            mensagem:
                'O usuário precisa estar logado e informar um token válido para acessar o recurso.',
            erro: error.message
        });
    }
};

export default {
    validacaoToken
};
