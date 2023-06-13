import yup from './yup.js';

const petSchema = yup.object().shape({
    name: yup.string(),
    size: yup.number(),
    weigth: yup.number(),
    age: yup.number(),
    breed: yup.string(),
    petOwner: yup.number()

})

export default petSchema