import styles from "./User.module.scss";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";

// The component must have a container div with a css class user ---------
// The component must have used the Avatar component
// The component must have an element with the css class name which renders the user's name
// The component must have an element with the css class info which renders the user's info
// The component must have an a css module named User.module.scss
// The component must use the colors variables from the styles/colors folder
// The component must use rem as sizing units for the texts

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
