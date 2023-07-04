import React from 'react'
import { NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./menuItem.module.scss";

const cx = classNames.bind(styles);


const MenuItem = ({ icon , title , to, active }) => {
  return (
    <NavLink to={to} className={(nav)=> (
        cx('menu-item',{active : nav.isActive})
    )}  >
        {icon}
        <span className={cx('menu__item--title')}> {title} </span>
    </NavLink>
  )
}

export default MenuItem