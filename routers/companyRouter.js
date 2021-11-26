const express = require('express')
const companyRouter = express.Router();
const companyController = require('../controllers/companyCOntroller');
companyRouter.route('/').post(companyController.getAllCompany)
companyRouter.route('/:id').get(companyController.getOneCompany)

companyRouter.route('/create').post(companyController.createNewCompany)
companyRouter.route('/update').post(companyController.updateCompany)
companyRouter.route('/delete').delete(companyController.deleteCompany)




module.exports = companyRouter
