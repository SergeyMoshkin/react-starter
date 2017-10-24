import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actionCreators from '../../actions/actionCreator';
import {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Table as TableMaterial} from 'material-ui/Table';
import {Dialog} from 'material-ui';
import styles from './Table.css'

class Table extends Component {

  static propTypes = {
    fields: PropTypes.array,
    data: PropTypes.array
  };
  static defaultProps = {
    fields: ["id", "name"]
  };

  renderDialog(data) {
    const {dialogRow, dialogRowTitle, dialogRowDiscription} = styles;
    if (typeof data === "object") {
      return (
        <div>
          {
            Object.keys(data).map(i => {
                return (
                  <div key={i} className={dialogRow}>
                    <span className={dialogRowTitle}>{i}:</span>
                    <span className={dialogRowDiscription}>{data[i]}</span>
                  </div>
                )
              }
            )
          }
        </div>
      )
    }
  }

  render() {
    const {data, fields, isDialogShown, num, dialogContent} = this.props;
    const {dialogToggle} = this.props.actions;
    return (
      <div>
        <TableMaterial selectable={false} onCellClick={ (num) => dialogToggle(num, true)}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              {
                fields.map((fieldItem, i) => <TableHeaderColumn key={`head${i}`}
                                                                tooltip={fieldItem}>{ fieldItem }</TableHeaderColumn>)
              }
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {
              data.map((dataItem, i) => {
                return (
                  <TableRow key={`row${i}`}>
                    {
                      fields.map((fieldItem, i) => <TableRowColumn
                        key={fieldItem + i}>{ dataItem[fieldItem] }</TableRowColumn>)
                    }
                  </TableRow>
                )
              })
            }
          </TableBody>
        </TableMaterial>
        <Dialog
          title="Row information"
          modal={false}
          open={isDialogShown}
          onRequestClose={() => dialogToggle(null, false)}
        >
          {this.renderDialog(dialogContent[num])}
        </Dialog>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {isDialogShown, num} = state.main;
  const {data} = state.main.response;
  return {
    num,
    isDialogShown,
    dialogContent: data
  }
};

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actionCreators, dispatch)}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);