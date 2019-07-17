import React from 'react'

import SetupLaravelProject from "../Tutorial/Laravel/SetupLaravelProject";






class LaravelRoute extends React.Component {



  render () {

    switch (this.props.url) {
      case 'setup-laravel-project':
            return <SetupLaravelProject/>
      default:
          return  <div>Page Not Found</div>

    }
  }
}

export default LaravelRoute;
