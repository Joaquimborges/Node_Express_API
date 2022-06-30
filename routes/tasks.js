const express = require('express');
const router = express.Router();

const {
    getAll,
    getTask,
    create,
    updateTask,
    deleteTask} = require('../controllers/tasksController');

router.post('/api/create', create);
router.get('/api/:id', getTask)
router.get('/api/get/all', getAll);
router.patch('/api/:id/update', updateTask);
router.delete('/api/delete/:id', deleteTask);

 
 






module.exports = router;