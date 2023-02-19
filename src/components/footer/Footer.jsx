import { Grid, Container, Typography, Button } from "@mui/material";
import styles from "./Footer.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";

export default function Footer() {
  return (
    <div className={classNames(styles.footer)}>
      <Container className={classNames(styles.container)} maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{marginTop: "12px", padding: "0"}}>
            <Logo type="muted" />
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <p className={classNames(styles.copyright)}>
              {" "}
              Bum All Rights Reserved 2021{" "}
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Button variant="text" className={classNames(styles.footerButton)}>
              Privacy Policy
            </Button>
            <Button variant="text" className={classNames(styles.footerButton)}>
              Cookie Policy
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
