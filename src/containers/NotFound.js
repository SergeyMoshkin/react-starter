import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreator';

class NotFound extends Component {


  componentWillMount() {
    const { fetchModel } = this.props.actions;
    fetchModel();
  }

  render() {
    const { response } = this.props;
    return (
      <div>{JSON.stringify(response)}</div>
    )
  }
}

const mapStateToProps = state => {
  const { response } = state.main;
  return {
    response
  }
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actionCreators, dispatch) }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound)