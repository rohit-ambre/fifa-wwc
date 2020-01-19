import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getTeamsGroups } from '../store/actions/teamAction'

class TeamsOverview extends Component {
  // constructor(props) {
  //   super(props)
  // }

  componentDidMount() {
    this.props.getTeamsGroups()
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Teams</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Groups</a>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">
          <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Teams</div>
          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Groups</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ teams: state.teams });

const mapDispatchToProps = (dispatch) => bindActionCreators({ getTeamsGroups }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamsOverview);