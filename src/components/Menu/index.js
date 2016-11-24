import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import style from './Menu.css';

const Menu = (props) => {
  let {items} = props;
  return (
    <div className={style.main}>
      {
        items.map(item => <div key={item} className={style.item}><Link to={`/${item}`}>{ (item) ? item : "main"}</Link></div>)
      }
    </div>
  )

};

Menu.PropTypes = {
  items: PropTypes.array.isRequired
};

export default Menu
