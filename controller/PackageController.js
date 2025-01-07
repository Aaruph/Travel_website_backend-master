const Package = require('../model/Package')

const findAll = async (req, res) => {
    try {
        const packages = await Package.find();
        res.status(200).json(packages);
    } catch (e) {
        res.json(e)
    }



}
const save = async (req, res) => {
    try {
        const package = new Package(req.body);
        await package.save();

        res.status(201).json(package)
    } catch (e) {
        res.json(e)
    }

}
const findById = async (req, res) => {
    try {
        const package = await Package.findById(req.params.id);
        res.status(200).json(package)
    } catch (e) {
        res.json(e)

    }


}
const deleteById = async (req, res) => {
    try {
        const package = await Package.findByIdAndDelete(req.params.id);
        res.status(200).json("data Deleted")
    } catch (e) {
        res.json(e)

    }


}
const update = async (req, res) => {
    try {
        const package = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json(package)
    } catch (e) {
        res.json(e)

    }


}


module.exports = {
    findAll,
    save,
    findById,
    deleteById,
    update


}