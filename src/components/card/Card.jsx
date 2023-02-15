import Avatar from "../avatar/Avatar";
import {
  Box,
  Card as CardMUI,
  CardContent,
  CardMedia,
  Chip,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import styles from "./Card.module.scss";
import classNames from "classnames";
import millify from "millify";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user = {
    avatar: { url: "" },
    verified: false,
  },
  price = "",
  currency = "",
  ...props
}) {
  return (
    <Box sx={{ maxWidth: 319 }}>
      <CardMUI variant="outlined" className={classNames(styles.card)}>
        <CardContent>
          <Avatar
            url={user.avatar.url}
            verified={user.verified}
            size={props.size}
          />
          <div className={classNames(styles.media)}>
            <img className={classNames(styles.nft)} src={mediaUrl} alt="NFT image" />
          </div>
          <div className={classNames(styles.nftFooter)}>
            <div className={classNames(styles.nftInfo)}>
              <h2 className={classNames(styles.name)}>{name}</h2>
              <h3 className={classNames(styles.price)}>{price} {currency}</h3>
            </div>
            <div className={classNames(styles.likes)}>
              <Chip
                icon={<FavoriteIcon className={classNames(styles.favoriteIcon)}/>}
                label={millify(likes, { lowercase: true })}
                variant="outlined"
                className={classNames(styles.chipOutlined)}
              />
            </div>
          </div>
        </CardContent>
      </CardMUI>
    </Box>
  );
}
