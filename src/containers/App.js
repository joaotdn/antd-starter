import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Layout, Row, Col } from 'antd'
import routes from '../routes'

import NavBar from '../components/ui/NavBar'

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout
    const { history } = this.props

    return (
      <div className="App">
        <Header>
          <div className="logo" />
          <NavBar history={history} />
        </Header>
        <Content style={{ padding: '40px 0' }}>
          <Row>
              <Col sm={24} lg={{ span: 22, offset: 1 }}>
                  <ConnectedRouter history={history}>
                    { routes }
                  </ConnectedRouter>
              </Col>
          </Row>
        </Content>
        <Footer>
          <span>Created by joaotdn@gmail.com</span>
        </Footer>
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
}

export default App
