import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { checkLogin } from './store/actions/authAction'
import Login from './Components/Login';
import Home from './Components/Home';

// import './App.css';
import Teams from './Components/Teams';
import Layout from './HOC/Layout';
import Match from './Components/Match';

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.checkLogin();
  }

  render() {

    let routes = (
      <Switch>
        <Route exact path='/' component={Login} />
        {/* <Redirect to='/' /> */}
      </Switch>
    );

    if (this.props.authData.authenticated) {
      routes = (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/teams/' component={Teams} />
          <Route exact path='/match/' component={Match} />
        </Switch>
      );
    }
    return (
      <div className="App" >
        <Layout auth={this.props.authData.authenticated}>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => ({ authData: state.auth });

const mapDispatchToProps = dispatch => bindActionCreators({ checkLogin }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
