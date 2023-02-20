import { Grid, Button } from "@mui/material";
import styles from "./How.module.scss";
import classNames from "classnames";
import Step from "./Step";

export default function How({
  description = "",
  title = "",
  items = [],
  link = "",
}) {
  return (
    <div className={classNames(styles.howWrapper)}>
      <Grid
        container
        className={classNames(styles.grid)}
        alignItems="center"
        rowGap={6}
      >
        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
          <div className={classNames(styles.textContentWrapper)}>
            <h1 className={classNames(styles.title)}>{title}</h1>
            <p className={classNames(styles.description)}>{description}</p>
            <Button variant="contained" className={classNames(styles.button)} href={link}>
              Learn more
            </Button>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={5}
          className={classNames(styles.stepCardWrapper)}
        >
          {items &&
            items.map((item, index) => (
              <div className={classNames(styles.item)} key={index}>
                <Step
                  number={index + 1}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
        </Grid>
      </Grid>
    </div>
  );
}
