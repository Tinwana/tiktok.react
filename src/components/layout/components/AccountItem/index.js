import { memo } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles);

function AccountItem({ data }) {
    return ( 
        <>
            <Link to={`/@/${data.nickname}`} className={cx("wrapper")}>
                    <div className={cx('account-content')}>
                    <img src={data.avatar} alt={data.last_name} className="avatar" />
                    <div className={cx('info')}>
                        <span className={cx('user-name')}>{data.nickname} {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx("check-icon")} />}</span>
                        <p className={cx('user-description')} >{data.full_name}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default memo(AccountItem);