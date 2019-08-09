import React, {Component} from 'react';
import axios from 'axios';
import php from '../../assets/img/php.png'
//import javascript from '../../assets/img/javascript.jpg'











class Task extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }

    componentWillMount() {
        axios.get('http://localhost:8000/api/task')
          .then( response => {
             this.setState({
                 data : response.data
             });
          })
          .catch(function (error){
            console.log(error);
          });
      }


    render() {
        return (
            <section>
                <div className="container section-container">
                    <div>
                        <h4 className="text-center">Recent Activity</h4>
                        {this.state.data.map(item => {
                                return (
                                    <div className="d-md-flex carder-activity" key={item.id}>
                                        <img src={php} style={{width : '30%'}}  alt="php"/>
                                        <a href={'/'+item.category+'/'+item.url} className="activity-link">
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                            <p className="text-right">{item.createdAt.split('T')[0]}</p>
                                        </a>
                                    </div>
                                );
                        })
                       }

                    </div>
                    <div>
                        <h4>Most Viewed</h4>
                        <div className="carder-most-view">
                            <a href="/laravel/setup-laravel-project" className="activity-link">
                                <h6 className="text-center font-weight-bold">Setup Laravel Project</h6>
                                <p>Are you stack in how to setup laravel project? Follow this tutorial to learn how to
                                    setup lavarel project and begin your laravel journey.</p>
                                <p className="text-right">2019 - 07 - 08 </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Task;
