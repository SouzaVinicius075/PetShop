import petSchema from "../validations/pet-schema.js"
import petModel from "../model/pet-model.js"
const createPet = async (req, res) => {
    try {
        await petSchema.validate(req.body)
        const insertPet = await petModel.insertPet(req.body)
        if (!insertPet) {
            return res.status(400).json({ "Message": "Houve algum problema no cadastro" })
        }
        return res.status(201).json(insertPet)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
const updatePet = async (req, res) => {
    try {
        await petSchema.validate(req.body)
        const updatePet = await petModel.updatePet(req.body, req.params.petId)
        if (!updatePet) {
            return res.status(500).json({ "Message": "Houve algum problema na atualização" })
        }
        return res.status(201).json(updatePet)
    } catch (error) {
        return res.status(500).json({ "Message": error.message })
    }
}
const deletePet = async (req, res) => {
    try {
        const { id_pet } = req.body
        const userDeleted = await petModel.deletePet(id_pet)
        if (!userDeleted) {
            return res.status(404).json({ "Message": "Houve algum problema na operação" })
        }
        return res.status(200).json(userDeleted)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
export default { createPet, updatePet, deletePet }