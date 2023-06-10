import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faCircleXmark,
  faEarthAsia,
  faEllipsis,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faPlus,
  faQuestion,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import styles from "./header.module.scss";
import { images } from "../../../../assets/images";
import { default as ProperWrapper } from "../../../Proper";
import AccountItem from "../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Menu";
const cx = classNames.bind(styles);
const MENU_ITEM  = [
  {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children:[
        {
          icon: <FontAwesomeIcon icon={faAngleLeft} />,
          title: 'Language'
        },
        {
          title: 'English'
        },
        {
          title: 'Vietnamese'
        }
      ]
  },
  {
      icon: <FontAwesomeIcon icon={faQuestion} />,
      title: 'Feedback and help',
      to: '/feedback'
  },
  {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard and shortcuts',
  }
]
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
            // visible
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
          <div className={cx("actions")}>
            <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text>
              <span> Up load</span>
            </Button>
            <Button primary>Login</Button>
            
              <Menu data={MENU_ITEM}>
                <button className={cx("list-icon")}>
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </button>
              </Menu>

          </div>
        </div>
      </header>
    </>
  );
}
