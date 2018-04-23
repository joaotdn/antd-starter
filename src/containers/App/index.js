import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Layout, Row, Col } from 'antd'
// import { Switch, Route } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import NavBar from '../../components/ui/NavBar';

class App extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    const { history } = this.props;

    return (
      <div className="App">
        <Header>
          <div className="logo" />
          <NavBar history={history} />
        </Header>
        <Content style={{ padding: '40px 0' }}>
          <Row>
              <FormattedMessage {...messages.startProjectHeader} />
          </Row>
        </Content>
        <Footer>
          <span><FormattedMessage {...messages.startProjectFooter} /></span>
        </Footer>
      </div>
    )
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default App
