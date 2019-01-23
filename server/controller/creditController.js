const db = require('../database/index.js')

const controller = {}

controller.credits = (req, res) => {
    db.query('SELECT * FROM Recarga ORDER BY  id_recarga DESC', (error, result) => {
        if (error) {
            console.log(error.sqlMessage);
            res.json(null);
        } else {
            res.json(result);
        }
    })
}
controller.addCredit = async (req, res) => {

    const body = Object.values(req.body);
    await db.query('INSERT INTO Recarga (id_telefonica, monto, celular, cliente, fecha) VALUES' +
        '(?,?,?,?,?)', [parseInt(body[0]), parseInt(body[1]), body[2], body[3], body[4]], (error, result) => {
            if (error) {
                console.log(error.sqlMessage);
                res.json(null);
            } else {
                res.json(result);
            }

        })
}

module.exports = controller;