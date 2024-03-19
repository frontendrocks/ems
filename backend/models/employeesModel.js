import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phone: {
        type: String,
        require:true
    },
    address: {
        type: String,
        require:true
    },
})

export const Employees = mongoose.model('Employees', employeeSchema);