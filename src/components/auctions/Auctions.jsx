import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Container from "@mui/material/Container";
import classNames from "classnames";
import styles from "./Auctions.module.scss";
import Card from "../card/Card";

export default function Auctions({ cards = [] }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Container className={classNames(styles.container)} maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          className={classNames(styles.headerAuctionBox)}
        >
          <h1 className={classNames(styles.auctionHeading)}>
          🔥Live Auctions
          </h1>
          <FormControl className={classNames(styles.formAuctionControl)}> 
            <InputLabel id="auctions-select">This week</InputLabel>
            <Select labelId="auctions-select" id="select">
              <MenuItem value={1}>Sunday</MenuItem>
              <MenuItem value={2}>Monday</MenuItem>
              <MenuItem value={3}>Tuesday</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={2}
          justifyContent="center"
        >
          {cards &&
            cards.map((card, index) => {
              return (
                <Grid item key={index} sm={12} md={3} lg={3} xl={3}>
                  <Card
                    size={35}
                    name={card.name}
                    likes={1100}
                    mediaUrl="images/nft.jpg"
                    user={{
                      avatarUrl: card.user.avatar,
                      verified: card.user.verified,
                    }}
                    price={card.price}
                    currency={card.currency}
                    timeLeft={card.timeLeft}
                  />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
}
