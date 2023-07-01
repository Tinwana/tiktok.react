import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCloudArrowDown,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faMessage,
  faPlus,
  faQuestion,
  faSignOut,
  faSpinner,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react";
import Tippy from "@tippyjs/react";
import styles from "./header.module.scss";
import { images } from "../../../../assets/images";
import { default as ProperWrapper } from "../../../Proper";
import AccountItem from "../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Menu";
import "tippy.js/dist/tippy.css";
const cx = classNames.bind(styles);
const MENU_ITEM = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
          type: "Language",
        },
        {
          code: "vi",
          title: "Vietnamese",
          type: "Language",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard and shortcuts",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View profile",
    to: "/@hoaa",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coin",
    to: "/coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Setting",
    to: "/setting",
  },
  ...MENU_ITEM,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: "Log out",
    to: "/log out",
    separate : true
  }
]
export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([1]);

  useEffect(()=>{

  })

  const handleMenu = (menuItem) => {};
  const currentUser = true;
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </div>
        <HeadlessTippy
          interactive
          visible={searchResults.length > 0}
          delay={1000}
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
            <input
              type="text"
              placeholder="Search account and videos!"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button className={cx("clear-icon")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} />
            <button className={cx("search-icon")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom" delay={100}>
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudArrowDown} />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom" delay={100}>
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Tippy content="Upload video" placement="bottom">
                <Button leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                  <span> Up load</span>
                </Button>
              </Tippy>
              <Button primary>Login</Button>
            </>
          )}
          <Menu data={currentUser ? userMenu : MENU_ITEM} onChange={handleMenu}>
            {currentUser ? (
              <img
                className={cx("user-avatar")}
                src="https://e0.pxfuel.com/wallpapers/1021/452/desktop-wallpaper-anime-ultra-8k-for-mobile-jpeg-1-anime.jpg"
                alt="hoa"
              />
            ) : (
              <button className={cx("list-icon")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
