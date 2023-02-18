import { useState, useEffect } from "react";
import Avatar from "../avatar/Avatar";
import { Card as CardMUI, cardClasses, CardContent, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import styles from "./Card.module.scss";
import classNames from "classnames";
import millify from "millify";
import Countdown from "react-countdown";

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
  const [live, setLive] = useState(false);

  useEffect(() => {
    const timeleftExists = timeLeft ? true : false;
    setLive(timeleftExists);
  }, []);

  //Countdown render function
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      setLive(false);
      return null;
    } else {
      // Render a countdown
      const currentHour = hours >= 10 ? hours : `0${hours}`;
      const currentMinutes = minutes >= 10 ? minutes : `0${minutes}`;
      const currentSeconds = seconds >= 10 ? seconds : `0${seconds}`;

      return (
        <span>
          {currentHour}:{currentMinutes}:{currentSeconds}
        </span>
      );
    }
  };

  //Live badge icon
  const badge = (
    <div className={classNames(styles.badge)}>
      <CircleIcon sx={{ fontSize: "0.9rem" }} /> LIVE
    </div>
  );

  const countdown = (
    <div className={styles.counter}>
      <Countdown date={Date.now() + timeLeft} renderer={renderer} />
    </div>
  );

  const millifiedLikes = millify(likes, { lowercase: true });
  return (
    <CardMUI
      className={classNames(styles.card)}
      sx={{
        backgroundColor: live ? "rgba(36, 242, 94, .1)" : null,
      }}
    >
      <Avatar url={user.avatarUrl} verified={user.verified} size={props.size} />
      <div className={classNames(styles.nftContainer)}>
        <img
          className={classNames(styles.media)}
          src={mediaUrl}
          alt="NFT image"
        />

        {live && badge}
        {live && countdown}
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
    </CardMUI>
  );
}
