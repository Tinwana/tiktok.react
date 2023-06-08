import classNames from "classnames/bind";
import styles from "./sideBar.module.scss";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx("wrapper")}>
        <h2>Sidebar</h2>
    </div>
  )
}

export default SideBar;
