import { HomeIcon,UserGroupIcon,CompassIcon,LiveIcon } from "../../../Icon";
import classNames from "classnames/bind";
import styles from "./sideBar.module.scss";

import MenuSb from "../MenuSb";
import MenuItem from "../MenuItem";

const cx = classNames.bind(styles);

function SideBar() {
  return (
    <div className={cx('wrapper')} >
      <MenuSb>
        <MenuItem icon={<HomeIcon />} title='For You' to='/' />
        <MenuItem icon={<UserGroupIcon />} title='Following' to='/following' />
        <MenuItem icon={<CompassIcon />} title='Explore' to='/explore' />
        <MenuItem icon={<LiveIcon />} title='LIVE' to='/live' />
      </MenuSb>
    </div>
  )
}

export default SideBar;
