import classNames from "classnames/bind";
import styles from "./menuSb.module.scss";

const cx = classNames.bind(styles);


const MenuSb = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
        {children}
    </div>
  )
}

export default MenuSb