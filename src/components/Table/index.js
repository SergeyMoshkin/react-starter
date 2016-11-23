import React, {PropTypes} from 'react';
import style from './Table.css'

const Table = (props) => {
  let { data, fields } = props;
  return (
    <div className={style.main}>
      <div className={`${style.row} ${style.head}`}>
        {
          fields.map((fieldItem, i) => <span key={`head${i}`} className={style.cell}>{ fieldItem }</span>)
        }
      </div>
      {
        data.map((dataItem, i) => {
          return (
            <div key={`row${i}`} className={style.row}>
              {
                fields.map((fieldItem, i) => <span key={fieldItem + i} className={style.cell}>{ dataItem[fieldItem] }</span>)
              }
            </div>
          )
        })
      }
    </div>
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