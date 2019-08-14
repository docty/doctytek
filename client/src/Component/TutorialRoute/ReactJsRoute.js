import React from 'react'

import IntroductionToReactJs from "../Tutorial/ReactJs/IntroductionToReactJs";






class ReactJsRoute extends React.Component {



  render () {

    switch (this.props.url) {
      case 'introduction-to-reactjs':
            return <IntroductionToReactJs/>
      default:
          return  <div>Page Not Found</div>

    }
  }
}

export default ReactJsRoute;
