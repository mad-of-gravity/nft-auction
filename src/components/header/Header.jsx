import {
  Container,
  Button,
  Grid,
  TextField,
  Input,
  InputAdornment,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Header.module.scss";
import classNames from "classnames";
import Logo from "../logo/Logo";

const TextButton = styled(Button)({
  textTransform: "capitalize",
  color: "#E1E1FC"
});

export default function Header() {
  return (
    <Container className={classNames(styles.headerContainer)} maxWidth="true">
      <Grid container alignItems="center" justifyContent="space-evenly">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item lg={6}>
          <TextField
            className={classNames(styles.searchInput)}
            placeholder="Find items, users and activities"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{color: "#FFFFFF"}}/>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item>
          <TextButton>Home</TextButton>
          <TextButton>Activity</TextButton>
          <Button variant="contained"> Explore </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
