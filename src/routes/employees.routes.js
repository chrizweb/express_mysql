import {Router} from 'express'
import * as ctr_employees from  '../controllers/employees.controller.js'


const router = Router()

router.get('/employees', ctr_employees.getEmployees)
router.get('/employees/:id', ctr_employees.getEmployeeId)
router.post('/employees', ctr_employees.createEmployee)
router.patch('/employees/:id', ctr_employees.updateEmployee)
router.delete('/employees/:id', ctr_employees.deleteEmployee)

export default router