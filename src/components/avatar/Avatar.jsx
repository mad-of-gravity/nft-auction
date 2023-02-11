import styles from "./Avatar.module.scss";
import classNames from "classnames";

export default function Avatar({ size = 90, url, verified = false }) {
  const badgeUrl = "images/verified.svg";
  const badge = verified ? (
    <img src={badgeUrl} className={classNames(styles.badge)} />
  ) : null;

  return (
    <div
      className={classNames(styles.avatar)}
      style={{ width: size, height: size }}
    >
      <img src={url} className={classNames(styles.image)} />
      {badge}
    </div>
  );
}
