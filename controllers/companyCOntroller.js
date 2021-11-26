const companyModel = require('../models/companyModel')

exports.getAllCompany = async (req, res) => {
    let pageNo = req.body.pageNo ? req.body.pageNo : 1
    let recordsPerPage = req.body.recordsPerPage
    let skip = recordsPerPage * pageNo
    let data
    if (recordsPerPage && pageNo) {
        console.log('testing');
        data = await companyModel.find({ skip: skip, limit: recordsPerPage });

    } else {
        data = await companyModel.find();

    }

    res.send({ message: "success", data })
}

exports.getOneCompany = async (req, res) => {

    let data = await companyModel.findOne({ _id: req.params.id })
    res.send({ message: "success", data })
}
exports.createNewCompany = async (req, res) => {
    try {
        console.log(req.body);
        // const company = new companyModel(req.body)
        // await company.save()

        await companyModel.create(req.body)
        res.status(201).send({ message: 'Data inserted' })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

exports.updateCompany = async (req, res) => {
    try {

        await companyModel.findByIdAndUpdate(req.body._id, req.body)
        res.status(201).send({ message: 'Data updated' })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

exports.deleteCompany = async (req, res) => {
    try {

        await companyModel.remove({ _id: req.body._id })
        res.status(204).send({ message: 'Data deleted' })
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}