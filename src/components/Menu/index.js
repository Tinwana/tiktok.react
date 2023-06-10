import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import { default as ProperWrapper } from "../Proper";
import Button from "../Button";
const cx = classNames.bind(styles);

function Menu({ children, data = [] }) {
  const renderMenu = () =>
    data.map((item, index) => (
      <Button
        className={cx("menu-item")}
        key={index}
        leftIcon={item.icon}
        to={item.to}
      >
        {item.title}
      </Button>
    ));

  return (
    <Tippy
      interactive
      delay={[0,700]}
      placement="bottom-end"
      render={(attrs) => (
        <>
          <div className={cx("list-items")}>
            <ProperWrapper className={cx("menu-items")}>
              {renderMenu()}
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
