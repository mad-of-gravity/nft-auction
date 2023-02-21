import { useRouter } from "next/dist/client/router";

import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";

export default function Featured({ items = [] }) {
  const route = useRouter();

  const handleImageClick = (i) => {
    route.push(items[i].href);
  };

  return (
    <div>
      <Container maxWidth="xl">
        <ImageList cols={6} gap={15}>
          {items.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                src={item.image}
                alt={item.title}
                onClick={() => handleImageClick(index)}
                className={classNames(styles.imageListItem)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}