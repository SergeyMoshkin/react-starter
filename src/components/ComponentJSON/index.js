import React, {PropTypes} from 'react';
import style from './ComponentJSON.css'

const ComponentJSON = (props) => {

  return (
    <div className={style.main}>
      {props.children}
    </div>
  )

};

export default ComponentJSON;