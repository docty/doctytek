import React, {Component} from 'react';
import axios from 'axios';
import NavBar from "./NavBar";
import logo from '../assets/img/logo.png'
import Footer from "./Footer";






class TutorialHomepage extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [],

        };
    }



    componentWillMount() {
        let url = this.props.match.params.url;


        axios.get('http://localhost:8000/api/task/show?q='+url)
          .then(response => {
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
            <div>
                <NavBar/>
                <section>
                    <div className="container container-block-section">
                        {this.state.data.map(item => {
                                return (
                                    <div className="carder-1" key={item.id}>
                                        <a href={'/'+item.category+'/'+item.url} className="activity-link">
                                        <img src={logo} alt="no logo"/>
                                        <h4>{item.title}</h4>
                                        <p>{item.createdAt.split('T')[0]}</p>
                                        <p>{item.description}
                                        </p>
                                        </a>
                                    </div>
                                )
                        })
                        }

                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default TutorialHomepage;
