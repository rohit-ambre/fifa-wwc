import React from 'react'
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../store/actions/authAction'


function Navbar(props) {
  const onLogout = () => {
    props.logout()
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Fifa Women's World cup</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/teams">Teams</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/match">Matches</Link>
          </li>
        </ul>
        <span className="navbar-text">
          <a href='#!' onClick={onLogout}> Logout</a>
        </span>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({ token: state.auth.auth_token });

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);