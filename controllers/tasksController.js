const taskModel = require('../models/taskModel');

module.exports = {
    async create(req, res) {
        const { name, completed } = req.body;
        await taskModel.create({
            name: name,
            completed: completed
        });
        return res.json(req.body);
    },

    async getTask (req, res) {
        const id  = req.params.id
        const task = await taskModel.findByPk(id);
        if(!task) {
            return res.status(404).json({msg: `No task with id : ${id}`});
        }
       return res.status(200).json({ task });
    },

    async getAll (req, res) {
        const tasks = await taskModel.findAll()
        return res.status(200).json({ tasks });
    },

    async updateTask (req, res) {
        const id = req.params.id
        const foundedTask = await taskModel.findByPk(id);
        if(!foundedTask) {
            return res.status(404).json({msg: `No task with id : ${id}`});
        }
        foundedTask.name = req.body.name
        foundedTask.completed = req.body.completed
        await foundedTask.save();
        
        return res.status(200).json({ sucess: true });
    },

    async deleteTask (req, res) {
        const id = req.params.id
        const foundedTask = await taskModel.findByPk(id);
        if(!foundedTask) {
            return res.status(404).json({msg: `No task with id : ${id}`});
        }
        await taskModel.destroy({ where: { id: id } });
        return res.status(200).json({ sucess: true });
    }
}

