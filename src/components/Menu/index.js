import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import { default as ProperWrapper } from "../Proper";
import Button from "../Button";
import HeaderMenu from "../Proper/headerMenu";
import { useState } from "react";
const cx = classNames.bind(styles);

function Menu({ children, data = [],hideOnClick = true , onChange = ()=> {} }) {
  const handleBack = (e) => {
    setHistory((prev) => {
      return prev.slice(0, prev.length - 1);
    });
  };

  const [history, setHistory] = useState([{ data: data }]);
  let current = history[history.length - 1];

  const renderMenu = (data) => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      const handleMenu = (e) => {
        if (isParent) {
          setHistory((prev) => {
            return [...prev, item.children];
          });
        } else{
          onChange(item);
        }
      };
      return (
        <Button
          className={cx("menu-item",{separate: item.separate})}
          key={index}
          leftIcon={item.icon}
          to={item.to}
          onClick={handleMenu}
        >
          {item.title}
        </Button>
      );
    });
  };
  return (
    <Tippy
    hideOnClick={hideOnClick}
    onHide={()=> {
      setHistory(prev => prev.slice(0, 1))
    }}
      interactive
      // appendTo={document.body}
      delay={[0, 700]}
      placement="bottom-end"
      render={(attrs) => (
        <>
          <div className={cx("list-items")}>
            <ProperWrapper className={cx("menu-items")}>
              {history.length > 1 && (
                <HeaderMenu title="Language" onBack={handleBack} />
              )}
              {renderMenu(data)}
            </ProperWrapper>
          </div>
        </>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
