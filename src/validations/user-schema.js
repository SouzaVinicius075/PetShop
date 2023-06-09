import yup from './yup.js';

const userSchema = yup.object().shape({
    userEmail: yup.string().email().required(),
    userPassword: yup.string().required()
})

export default userSchema