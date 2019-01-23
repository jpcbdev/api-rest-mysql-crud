const db = require('../database/index.js');

const controller = {}

controller.companies = async (req, res) => {
    await db.query('SELECT * FROM Telefonica', (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    })
}
controller.addCompany = async (req, res) => {
    //  await
    const body = Object.values(req.body);
    db.query('INSERT INTO Telefonica (nombre, descripcion) VALUES (?,?)', [body[0], body[1]], (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    })
}
controller.deleteCompany = async (req, res) => {
    const id = req.params.id;
    await db.query('DELETE FROM Telefonica WHERE id_telefonica = ?', [id], (error, result) => {
        if (error) {
            res.json(null);
            console.log(error.sqlMessage);
        } else {
            res.json(result);
        }
    });
}

module.exports = controller;