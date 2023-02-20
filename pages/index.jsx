import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import Step from "../src/components/how/Step";
import How from "../src/components/how/How";

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

const itemsData = [
  {
    title: "Digital Currency",
    description: "You can get ETH, the digital currency that fuels transactions on the Ethereum blockchain, from a digital currency exchange",
  },
  {
    title: "Crypto Wallet",
    description: "A crypto wallet, such as MetaMask, stores your ETH and processes transactions on the Ethereum blockchain.",
  },
  {
    title: "BUM.",
    description: "Let's connect your wallet to BUM, edit your profile, and begin interacting in the space.",
  }
];

export default function Index() {
  return (
    <How 
      title="HOW IT WORKS" 
      description="Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are three things you'll need in place to open your account and start buying or selling NFTs on BUM."
      items={itemsData}
    />
  );
}
