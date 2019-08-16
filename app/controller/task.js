//import model from '../models';
const model = require( '../models');




const { Task } = model;

class Tasks {

    static index(req, res) {
        return Task.findAll({order : [['createdAt','DESC']], limit : 3}).then(task => res.status(200).send(task));
    }

    static create(req, res) {
        let data = {title: 'title', description:'description', category:'category',url:'url'};
        return Task.create(data)
                  .then(book => res.status(201).send({
                    message: 'Task been created successfully'

                  }))
        }

        static show(req, res){
            let query = req.query.q
            return Task.findAll({where:{category: query }}).then(task => res.status(200).send(task));
        }
}

//export default Tasks
module.exports = Tasks;
