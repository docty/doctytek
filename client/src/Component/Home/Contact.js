import React, {Component} from 'react';
import axios from 'axios';






class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
        this.submitForm = this.submitForm.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }



onValueChange(e){
    this.setState({
        [e.target.name] : e.target.value
    });
}


submitForm(e){
e.preventDefault();
axios.post('http://localhost:8000/api/feedback',{
  name: this.state.name,
  email: this.state.email,
  message : this.state.message
})
  .then(function (response){

  })
  .catch( function (error){
    // Describe error!
  });
}
    render() {
        return (
            <section>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <input className="form-control" type="text" placeholder="Enter Name" require="true" name="name" onChange={this.onValueChange}/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="email" placeholder="Enter Email" require="true" name="email" onChange={this.onValueChange}/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control"  placeholder="Leave a message" require="true" name="message" onChange={this.onValueChange }/>
                        </div>
                        <button className="btn btn-primary" type="submit" onClick={this.submitForm}>SEND</button>
                    </form>
                </div>
            </section>
        );
    }
}

export default Contact;
