import { memo } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";
const cx = classNames.bind(styles);

function Button ({
  to,
  href,
  primary,
  outLine,
  text,
  rounded,
  onClick,
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}){
  
  let Comp = "button";
  const props = {
    onClick,
    rest,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <>
      <Comp
        className={cx("wrapper", className, {
          primary,
          outLine,
          text,
          rounded,
        })}
        {...props}
      >
        {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
      </Comp>
    </>
  );
}
export default memo(Button)
