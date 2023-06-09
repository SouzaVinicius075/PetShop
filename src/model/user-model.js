import jwt from 'jsonwebtoken'
import connection from '../configuration/connection.js'
import bcrypt from 'bcrypt'

export class UserModel {


    getUserByEmail = async (email) => {
        const user = await connection("users").where({ "user_email": email }).first();
        return user

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
    validateUser = async (email, password) => {
        const user = await this.getUserByEmail(email)
        if (!user) {
            return false
        }
        if (!(await bcrypt.compare(password, user.user_password))) {
            return false
        }
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                email: user.email
            },
            process.env.PASSWORDJWT,
            {
                expiresIn: "2h"
            })
        return token
    }
}

