import Avatar from "../avatar/Avatar";
import { Card as CardMUI, cardClasses, CardContent, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./Card.module.scss";
import classNames from "classnames";
import millify from "millify";
import Countdown, { zeroPad } from "react-countdown";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user = {
    avatarUrl: "",
    verified: false,
  },
  price = "",
  currency = "",
  timeLeft,
  ...props
}) {
  //Countdown render function
  const render = ({ hours, minutes, seconds }) => {
    return (
      <div className={classNames(styles.counter)}>
        {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </div>
    );
  };

  //Live badge icon
  const badge = (
    <div className={classNames(styles.badge)}>
      <CircleIcon sx={{ fontSize: "0.9rem" }} /> LIVE
    </div>
  );

  const millifiedLikes = millify(likes, { lowercase: true });
  return (
    <CardMUI
      className={classNames(styles.card)}
      sx={{
        backgroundColor: timeLeft ? "rgba(36, 242, 94, .1)" : null,
      }}
    >
      <CardContent>
        <Avatar
          url={user.avatarUrl}
          verified={user.verified}
          size={props.size}
        />
        <div className={classNames(styles.nftContainer)}>
          <img
            className={classNames(styles.media)}
            src={mediaUrl}
            alt="NFT image"
          />

          {timeLeft && badge}
          {timeLeft && <Countdown date={Date.now() + timeLeft} renderer={render} />}
        </div>

        <div className={classNames(styles.nftFooter)}>
          <div className={classNames(styles.nftInfo)}>
            <h2 className={classNames(styles.title)}>{name}</h2>
            <h3 className={classNames(styles.price)}>
              {price} {currency}
            </h3>
          </div>
          <Chip
            icon={<FavoriteIcon className={classNames(styles.favoriteIcon)} />}
            label={millifiedLikes}
            variant="outlined"
            className={classNames(styles.likes)}
          />
        </div>
      </CardContent>
    </CardMUI>
  );
}
