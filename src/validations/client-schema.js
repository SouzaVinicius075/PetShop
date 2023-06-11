import yup from './yup.js';

const clientSchema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    age: yup.string(),
    celNumber: yup.string()

})

export default clientSchema