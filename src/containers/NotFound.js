import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actionCreators from '../actions/actionCreator';
import ComponentJSON from '../components/ComponentJSON'
import elements from '../elements'

class NotFound extends Component {

  constructor(props) {
    super(props);
    const {fetchModel} = this.props.actions;
    this.fetchModel = fetchModel;
  }

  componentWillMount() {
    this.fetchModel();
  }

  componentWillReceiveProps(next) {
    const url = this.props.params.splat;
    const nextUrl = next.params.splat;
    if (url !== nextUrl) {
      this.fetchModel();
    }
  }

  render() {
    const {response} = this.props;
    let Element = null;
    let data;
    let responseClass;
    if (typeof(response) === "object" && response !== null) {
      responseClass = response['@class'].split('.').pop();

      if (elements[responseClass] === undefined) {
        return (
          <ComponentJSON>{JSON.stringify(response, "", 4)}</ComponentJSON>
        );
      }
      else {
        Element = elements[responseClass];
        data = response.data;
      }
    }
    else {
      Element = (props) => <div>{response}</div>;
    }
    return (
      <div>
        <Element data={data}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {response} = state.main;
  return {
    response
  }
};

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actionCreators, dispatch)}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotFound)