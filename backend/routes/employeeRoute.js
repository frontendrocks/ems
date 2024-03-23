import express from 'express';
import {Employees} from '../models/employeesModel.js';
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.address) {
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }
        const newEmployee = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address
        }

        const employee = await Employees.create(newEmployee);
        return res.status(201).send(employee)
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

router.get('/', async (req, res) => {
    try {
        const employee = await Employees.find({});
        return res.status(200).json({
            count: employee.length,
            data: employee
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

// to fet record from Id

router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;
    const employeeSingle = await Employees.findById(id);

    return response.status(200).json(employeeSingle);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// to update
router.put('/:id', async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.phone || !req.body.address) {
            return res.status(400).send({
                message: "Bad Request"
            })
        }
        const { id } = req.params;
        const result = await Employees.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        return res.status(200).send({ message: 'Employee updated!!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

// to delete record 

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Employees.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        return res.status(200).send({ message: 'Employee deleted!!' });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

export default router;