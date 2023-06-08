import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.scss";
import { images } from "../../../../assets/images";
const cx = classNames.bind(styles);

export default function Header() {
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>
          <div className={cx("search-group")}>
            <input type="text" placeholder="Search account and videos!" />
            <button className={cx("clear-icon")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} />
            <button className={cx("search-icon")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          <div className={cx("actions")}>
            
          </div>
        </div>
      </header>
    </>
  );
}
