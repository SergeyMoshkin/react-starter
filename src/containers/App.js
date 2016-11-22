import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreator';
import styles from './style.useable.css'

class Message extends Component {
  componentWillMount() {
    styles.use();
  }
  componentWillUnmount() {
    styles.unuse();
  }
  render() {
    const styleUsed = styles.locals;
    return (
      <div className={styleUsed.redNote}>{this.props.message}</div>
    )
  }

}

class App extends Component {

  render() {
    const {message} = this.props;
    const {helloworldClick} = this.props.actions;
    return (
      <div onClick={() => helloworldClick("action worked!")} style={{cursor: "pointer"}}>
        { message && <Message message={message}/> }
        Click (click here)
        { this.props.children }
      </div>
    )
  }

}

const mapStateToProps = state => {
  const {message} = state.main;
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



