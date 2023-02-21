import User from "../user/User";
import classNames from "classnames";
import styles from "./Collector.module.scss";

export default function Collector({
  name = "",
  nftsCount = 0,
  avatar = "",
  verified = false,
  id = 0,
  type = "",
}) {
  return (
    <div className={classNames(styles.container, type === "light" ? styles.light : null)}>
      <div className={classNames(styles.collectorCard)}>
        <div className={classNames(styles.collectorID)}>{id}</div>
        <div className={classNames(styles.collectorContent)}>
          <User
            name={name}
            info={nftsCount}
            avatar={avatar}
            verified={verified}
          />
        </div>
      </div>
    </div>
  );
}
