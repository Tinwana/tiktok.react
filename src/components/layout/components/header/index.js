import { useEffect, useRef, useState } from "react";
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
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import styles from "./header.module.scss";
import { images } from "../../../../assets/images";
import { default as ProperWrapper } from "../../../Proper";
import AccountItem from "../AccountItem";
import Button from "../../../Button";
import Menu from "../../../Menu";
import "tippy.js/dist/tippy.css";
import axios from "axios";
import { Link } from "react-router-dom";
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
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading , setLoading] = useState(false)
  const searchInput = useRef()

  useEffect(()=>{
    if(!searchValue) {
      setSearchResults([])
      return;
    }
    if(searchValue.startsWith(' ') && searchValue.trim) {
      setSearchValue('')
      return
    };
    setLoading(true)
    axios.get(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
    .then(res => {
      setSearchResults(res.data.data);
      setLoading(false);
      return
    })
    .catch(()=> {
      setLoading(false);
      return
    })
  },[searchValue])
  const handleMenu = (menuItem) => {};
  const currentUser = true;
    return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <Link to='/' className={cx("logo")}>
          <img src={images.logo} alt="TikTok" />
        </Link>
        <HeadlessTippy
          interactive
          visible={searchResults.length > 0 && showResults}
          render={(attrs) => (
            <>
              <div className={cx("search-result")} tabIndex='-1' {...attrs}>
                <ProperWrapper>
                  <h4 className={cx("account-text")}>Accounts</h4>
                 {searchResults.map(result => {
                  return(
                    <AccountItem key={result.id} data={result} />
                  )
                 })}
                </ProperWrapper>
              </div>
            </>
          )}
          onClickOutside={()=> {
            setShowResults(false)
            }}
        >
          <div className={cx("search-group")}>
            <input
              ref={searchInput}
              type="text"
              placeholder="Search account and videos!"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
              }}
              onFocus={e => setShowResults(true)}
            />
           {!!searchValue && !loading && (
            <button className={cx("clear-icon")} onClick={e => {
              setSearchValue('');
              setSearchResults([])
              searchInput.current.focus()
            }}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
           )}
            {loading && <FontAwesomeIcon className={cx("loading-icon")} icon={faSpinner} />}
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
