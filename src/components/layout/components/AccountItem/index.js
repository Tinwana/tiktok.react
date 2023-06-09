import classNames from "classnames/bind";

import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <>
            <div className={cx("wrapper")}>
                    <div className={cx('account-content')}>
                    <img src="https://tophinhanhdep.com/wp-content/uploads/2021/11/Live-Anime-4K-Wallpapers.jpg" alt="account" className="avatar" />
                    <div className={cx('info')}>
                        <span className={cx('user-name')}>Tinwana <FontAwesomeIcon icon={faCheckCircle} className={cx("check-icon")} /></span>
                        <p className={cx('user-description')} >Tinwana like what you want!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountItem;