import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTeamsGroups } from '../store/actions/teamAction'

class Teams extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getTeamsGroups()
  }

  render() {
    return (
      <div>
        Teams
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ teams: state.teams });

const mapDispatchToProps = (dispatch) => bindActionCreators({ getTeamsGroups }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Teams);