import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreator';
import './style.css'

class App extends Component {
  render() {
    const {message} = this.props;
    const {helloworldClick} = this.props.actions;
    return (
      <div onClick={() => helloworldClick("action worked!")}>
        <div className="redNote">{message}</div>
        Hello, World! (click here)
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {message} = state;
  return {
    message
  }
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



