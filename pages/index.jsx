import Example from "../src/components/example/Example";
import Header from "../src/components/header/Header";
import Avatar from "../src/components/avatar/Avatar";
import User from "../src/components/user/User";
import Card from "../src/components/card/Card";

const user = {
  avatar: {
    url: "images/avatar.png",
  },
  verified: true,
}

export default function Index() {
  return <Card name="Clock" user={user} size={32} price="~12.2" likes="1100"/>;
}
