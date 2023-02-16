import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";
import Trending from "../src/components/trending/Trending";

const user = {
  avatar: {
    url: "images/avatar.png",
  },
  verified: true,
}

const cardData = {
  "cards":[
     {
        "name":"Ivy",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true,
        },
        "mediaUrl":"images/nft.jpg",
        "price":1,
        "currency":"ETH"
     },
     {
        "name":"Judie",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":2.3,
        "currency":"ETH"
     },
     {
        "name":"Juniper",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":5,
        "currency":"ETH"
     },
     {
        "name":"Maple",
        "user":{
           "avatar":{
              "url":"images/avatar.png"
           },
           "verified":true
        },
        "mediaUrl":"images/nft.jpg",
        "price":10,
        "currency":"ETH"
     }
  ]
} 

export default function Index() {
  return <Trending cards={cardData.cards} />;
}