import yup from './yup.js';

const createUserSchema = yup.object().shape({
    userEmail: yup.string().email().required(),
    userPassword: yup.string().required()
})

export default createUserSchema