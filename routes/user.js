const express = require('express');
const controllers = require('../controllers/controller')
const routers = express.Router();

routers.post('/add',controllers.add_note)
routers.get('/view',controllers.view_note)
routers.patch('/update/:id',controllers.update_note)
routers.delete('/delete/:id',controllers.delete_note)

routers.use(function (req, res, next) {
    return res.status(404).json({
        message: 'not found'
    });
});

module.exports = routers