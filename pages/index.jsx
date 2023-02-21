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
import Featured from "../src/components/featured/Featured";
import Collector from "../src/components/collectors/Collector";
import CollectorColumn from "../src/components/collectors/CollectorColumn";

export default function Index() {
  return (
    <CollectorColumn
      items={[
        {
          name: "terrika77",
          nftsCount: 134,
          avatar: "images/avatar.png",
          verified: true,
          id: 0,
        },
        {
          name: "brendan_1",
          nftsCount: 98,
          avatar: "images/avatar.png",
          verified: false,
          id: 1,
        },
        {
          name: "damiann",
          nftsCount: 97,
          avatar: "images/avatar.png",
          verified: false,
          id: 2,
        }
      ]}
    />
  );
}
