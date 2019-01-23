const db = require('../database/index.js');

const controller = {};

controller.employees = async (req, res) => {

    await db.query('SELECT * FROM Empleado', (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    });
}
controller.addEmployee = async (req, res) => {
    const body = Object.values(req.body);

    await db.query('INSERT INTO Empleado (cedula_empleado, primer_nombre, primer_apellido) VALUES (?,?,?)', [body[0], body[1], body[2]], (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);

        } else {
            res.json(result);
        }
    });
}
controller.deleteEmployee = async (req, res) => {
    const id = req.params.id;
    await db.query('DELETE FROM Empleado WHERE cedula_empleado = ?', [id], (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    });
}
controller.updateEmployee = async (req, res) => {
    const id = req.params.id;
    const data = Object.values(req.body);

    await db.query('UPDATE Empleado SET primer_nombre = ?, primer_apellido = ? WHERE cedula_empleado = ?', [data[1], data[2], id], (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    });
}
controller.employeeById = async (req, res) => {
    const id = req.params.id;
    await db.query('SELECT * FROM Empleado WHERE cedula_empleado = ?', [id], (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    });
}

module.exports = controller;