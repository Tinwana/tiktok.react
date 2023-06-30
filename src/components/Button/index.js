import { Link } from "react-router-dom";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Button({
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
}) {
  
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
