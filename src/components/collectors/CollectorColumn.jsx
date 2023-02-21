import Collector from "./Collector";
import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
// name="terrika77"
//       info={134}
//       avatar="images/avatar.png"
//       verified={true}
//       id={1}
export default function CollectorColumn({items = []}) {
    return (
        <div className={classNames(styles.container)}>
        {
            items.map((item, index) => 
              <Collector 
                name={item.name}
                nftsCount={item.nftsCount}
                avatar={item.avatar}
                verified={item.verified}
                id={item.id + 1}
                type={index % 2 === 0 ? null : "light"}
                key={item.id}
              />  
            )
        }
        </div>
    )
}