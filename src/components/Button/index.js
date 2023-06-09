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
  children,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    passProps,
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
        className={cx("wrapper", {
          primary,
          outLine,
          text,
          rounded,
        })}
        {...props}
      >
        {children}
      </Comp>
    </>
  );
}
