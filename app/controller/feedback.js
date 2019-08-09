import model from '../models';

const { Feedback } = model;




class Feedbacks {


    // conn.query('INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)',
    // [req.body.name, req.body.email, req.body.message], function(err, result, field)
    // {

    static create(req, res) {
        const { name, email, message } = req.body
        return Feedback.create({name, email, message})
                  .then(feedback => res.status(201).send({
                    message: 'Feedback been created successfully'
                    }))
        }
}

export default Feedbacks
