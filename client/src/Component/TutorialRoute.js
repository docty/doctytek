import React from 'react'
import LaravelRoute from "./TutorialRoute/LaravelRoute";
import ReactJsRoute from "./TutorialRoute/ReactJsRoute";









class TutorialRoute extends React.Component {

  constructor(props){
    super(props);
    this.state = {
          subroute : "",
          url :  ""
    }
  }
  componentWillMount() {
    this.setState({
      subroute :  this.props.match.params.subroute,
      url  : this.props.match.params.url
    });


  }


  render() {
    switch (this.state.subroute) {
      case 'laravel':
            return <LaravelRoute url = {this.state.url} />
      case 'reactjs':
            return <ReactJsRoute url = {this.state.url}/>
      default:
          return <div>Page Not Found</div>

    }
  }
}

export default TutorialRoute;
