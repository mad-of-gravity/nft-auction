import { Container, Grid } from "@mui/material";
import styles from "./How.module.scss";
import classNames from "classnames";

export default function Step({ number = 0, title = "", description = "" }) {
  return (
    <Grid container alignItems="center" className={classNames(styles.stepGrid)}>
      <Grid
        item
        xs={4}
        sm={4}
        md={4}
        lg={4}
        xl={4}
        alignSelf="center"
        className={classNames(styles.stepNumber)}
      >
        {number}
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
        <div className={classNames(styles.stepTextContent)}>
          <h5 className={classNames(styles.stepTitle)}>{title}</h5> 
          <p className={classNames(styles.stepDescription)}>{description}</p>
        </div>
      </Grid>
    </Grid>
  );
}
