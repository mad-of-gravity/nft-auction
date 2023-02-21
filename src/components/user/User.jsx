import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";


export default function User({
  name = "",
  info = "",
  avatar = "",
  size = 55,
  verified = false,
}) {
  return (
    <div className={classNames(styles.user)}>
      <Avatar size={size} url={avatar} verified={verified} />
      <div className={classNames(styles.userInfo)}>
        <h2 className={classNames(styles.name)}>{name}</h2>
        <h3 className={classNames(styles.info)}>{info}</h3>
      </div>
    </div>
  );
}
