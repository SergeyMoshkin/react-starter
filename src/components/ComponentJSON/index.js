import React, {PropTypes} from 'react';
import style from './ComponentJSON.css'
import { Paper } from 'material-ui'

const ComponentJSON = (props) => {

  return (
    <Paper className={style.main} zDepth={3} rounded={false}>
      {props.children}
    </Paper>
  )

};

export default ComponentJSON;