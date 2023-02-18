import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";

const cardData = [
  {
    name: "Ivy",
    user: {
        avatar: "images/avatar.png",
        verified: true,
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 10000,
  },
  {
    name: "Ivy",
    user: {
        avatar: "images/avatar.png",
        verified: true,
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 10000,
  },
  {
    name: "Ivy",
    user: {
        avatar: "images/avatar.png",
        verified: true,
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 10000,
  },
  {
    name: "Ivy",
    user: {
        avatar: "images/avatar.png",
        verified: true,
    },
    mediaUrl: "images/nft.jpg",
    price: 1,
    currency: "ETH",
    timeLeft: 10000,
  },
];

const user = {
   avatarUrl: "images/avatar.png",
   verified: true,
}


export default function Index() {
  return (
    <Auctions cards={cardData}/>
  );
}
