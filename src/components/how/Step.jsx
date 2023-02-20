import { Container, Grid } from "@mui/material";
import styles from "./Step.module.scss";
import classNames from "classnames";

export default function Step({ number = 0, title = "", description = "",}) {
  return (
    <div className={classNames(styles.stepWrapper)}>
      <div className={classNames(styles.stepNumber)}>
        <div className={classNames(styles.number)}>{number}</div>
      </div>
      <div className={classNames(styles.stepContent)}>
        <h1 className={classNames(styles.stepTitle)}>{title}</h1>
        <p className={classNames(styles.stepDescription)}>{description}</p>
      </div>
    </div>
  );
}
