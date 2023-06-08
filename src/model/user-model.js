import connection from '../configuration/connection.js'
import bcrypt from 'bcrypt'

export class UserModel {


    getUserByEmail = async (email) => {
        return connection("users").where({ "user_email": email });

    }
    insertUser = async (email, password) => {
        const passwordEncrypted = await bcrypt.hash(password, 10)
        const user = await connection("users")
            .insert({
                "user_email": email,
                "user_password": passwordEncrypted,
                "user_role": "user"
            })
            .returning('*')
        return user

    }
}

