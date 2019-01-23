const router = require('express').Router();

const employeeController = require('../controller/employeeController.js');
const companyController = require('../controller/companyController.js');
const creditController = require('../controller/creditController.js')

router
    .get('/employees/', employeeController.employees)
    .post('/employees/', employeeController.addEmployee)
    .delete('/employees/:id', employeeController.deleteEmployee)
    .put('/employees/:id', employeeController.updateEmployee)
    .get('/employees/:id', employeeController.employeeById)
    .get('/companies', companyController.companies)
    .post('/companies', companyController.addCompany)
    .delete('/companies/:id', companyController.deleteCompany)
    .get('/credits', creditController.credits)
    .post('/credits', creditController.addCredit)
    .get('/*', (req, res) => {
        res.send('Error 404 page not found');
    });

module.exports = router;