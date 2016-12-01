import React, {PropTypes} from 'react';
import style from './Table.css'
import {TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {Table as TableMaterial} from 'material-ui/Table';

const Table = (props) => {
  const { data, fields } = props;
  return (
    <TableMaterial selectable={false}>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          {
            fields.map((fieldItem, i) => <TableHeaderColumn key={`head${i}`} tooltip={fieldItem}>{ fieldItem }</TableHeaderColumn>)
          }
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true}>
        {
          data.map((dataItem, i) => {
            return (
              <TableRow key={`row${i}`}>
                {
                  fields.map((fieldItem, i) => <TableRowColumn key={fieldItem + i}>{ dataItem[fieldItem] }</TableRowColumn>)
                }
              </TableRow>
            )
          })
        }
      </TableBody>
    </TableMaterial>
  )
};

Table.PropTypes = {
  fields: PropTypes.array,
  data: PropTypes.array
};

Table.defaultProps = {
  fields: ["id", "name"]
};

export default Table;