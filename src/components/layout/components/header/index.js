import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faMagnifyingGlass,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import styles from "./header.module.scss";
import { images } from "../../../../assets/images";
import { default as ProperWrapper } from "../../../Proper";
import AccountItem from "../AccountItem";
const cx = classNames.bind(styles);

export default function Header() {
  const [results, setResults] = useState([]);
  return (
    <>
      <header className={cx("wrapper")}>
        <div className={cx("content")}>
          <div className={cx("logo")}>
            <img src={images.logo} alt="TikTok" />
          </div>
          <Tippy
            visible
            interactive
            render={(attrs) => (
              <>
                <div className={cx("search-result")}>
                  <ProperWrapper>
                    <h4 className={cx("account-text")}>Accounts</h4>
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                  </ProperWrapper>
                </div>
              </>
            )}
          >
            <div className={cx("search-group")}>
              <input type="text" placeholder="Search account and videos!" />
              <button className={cx("clear-icon")}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              <FontAwesomeIcon
                className={cx("loading-icon")}
                icon={faSpinner}
              />
              <button className={cx("search-icon")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </Tippy>
          <div className={cx("actions")}></div>
        </div>
      </header>
    </>
  );
}
