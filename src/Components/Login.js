import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { auth } from '../store/actions/authAction'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChangeHandler = _e => {
    this.setState({
      [_e.target.name]: _e.target.value
    })
  }

  formHandler = (e) => {
    e.preventDefault()
    this.props.auth(this.state.username, this.state.password);
  }

  render() {
    let redirect = null;
    if (this.props.data.authenticated) {
      redirect = <Redirect to="/" />
    }
    return (
      <div className='container'>
        {redirect}
        <div className='panel'>
          <h2>Login</h2>
          <form className='col-md-6 offset-md-3' type='post'>
            <div className='form-group row'>
              <label htmlFor='username' className='col-form-label col-sm-2'>Username</label>
              <input
                id='username'
                className='form-control col-sm-4'
                placeholder='Enter Username'
                type='text'
                value={this.state.username}
                name='username'
                onChange={this.onChangeHandler}
              />
            </div>
            <div className='form-group row'>
              <label htmlFor='password' className='col-form-label col-sm-2'>Password</label>
              <input
                id='password'
                className='form-control col-sm-4'
                type='password'
                value={this.state.password}
                placeholder='Enter Password'
                name='password'
                onChange={this.onChangeHandler}
              />
            </div>
            <button className='btn btn-primary' type='button' onClick={this.formHandler}>Login</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.auth });

const mapDispatchToProps = dispatch => bindActionCreators({ auth }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);