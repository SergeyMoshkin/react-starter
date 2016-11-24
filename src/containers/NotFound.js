import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../actions/actionCreator';
import ComponentJSON from '../components/ComponentJSON'
import Menu from '../components/Menu'

class NotFound extends Component {

  componentWillMount() {
    const { fetchModel } = this.props.actions;
    fetchModel();
  }

  render() {
    const { response, items } = this.props;
    let Element = null;
    let data;
    let responseClass;
    if (typeof(response) === "object" && response !== null) {
      responseClass = response['@class'].split('.').pop();
      try{
        Element = require(`../components/${responseClass}/index`).default;
        data = response.data;
      }
      catch(err) {
        return (
          <ComponentJSON>{JSON.stringify(response, "", 4)}</ComponentJSON>
        );
      }
    }
    else {
      Element = (props) => <div>{response}</div>;
    }
    return (
      <div>
        <Menu items={items}/>
        <Element data={data}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { response, items } = state.main;
  return {
    response,
    items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actionCreators, dispatch)}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound)