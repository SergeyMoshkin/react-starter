import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/actionCreator';
import mainStyles from './style.css';
import styles from './style.useable.css'
import Menu from '../components/Menu';

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
    const {message, items} = this.props;
    const {helloworldClick} = this.props.actions;
    return (
      <div>
        <Menu items={items}/>
        { message && <Message message={message}/> }
        <div className={mainStyles.wrapper}>
          <div onClick={() => helloworldClick("action worked!")} style={{cursor: "pointer", marginBottom: "20px"}}>
            Click (click here)
          </div>
          { this.props.children }
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const {message, items} = state.main;
  return {
    message,
    items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actionCreators, dispatch)}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)



