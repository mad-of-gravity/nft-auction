import {
  Box,
  Grid,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";
import styles from "./Trending.module.scss";
import classNames from "classnames";
import Card from "../card/Card";

export default function Trending({ cards = [] }) {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        className={classNames(styles.headerBox)}
      >
        <h1 className={classNames(styles.heading)}>Trending</h1>
        <FormControl className={classNames(styles.formControl)}>
          <InputLabel id="trending-select">This week</InputLabel>
          <Select
            labelId="trending-select"
            id="select"
            className={classNames(styles.select)}
          >
            <MenuItem value={1}>Sunday</MenuItem>
            <MenuItem value={2}>Monday</MenuItem>
            <MenuItem value={3}>Tuesday</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container rowSpacing={1} columnSpacing={1} justifyContent="center">
        {cards &&
          cards.map((card, index) => (
            <Grid item key={index} sm={12} md={3} lg={3} xl={3}>
              <Card size={35} {...card} className={classNames(styles.card)} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
