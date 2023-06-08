import classNames from "classnames/bind";
import Header from "../components/header";
import SideBar from "../components/sideBar";
import styles from './defaultLayout.module.scss'
const cx = classNames.bind(styles)

function DefaultLayOut({ children }) {
  return (
    <>
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx('container')}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
      
    </>
  );
}

export default DefaultLayOut;
