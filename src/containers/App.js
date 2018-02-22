import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from '../routes'



class App extends Component {
  render() {
    const { history } = this.props

    return (
      <div className="App">
        <ConnectedRouter history={history}>
          { routes }
        </ConnectedRouter>
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
