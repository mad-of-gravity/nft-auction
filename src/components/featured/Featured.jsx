import { useRouter } from "next/dist/client/router";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import Container from "@mui/material/Container";
import { ImageList, ImageListItem } from "@mui/material";

export default function Featured({ items = [] }) {
  const router = useRouter();

  const handleImageClick = (i) => {
    router.push(items[i].href);
  };

  return (
    <>
      <Container maxWidth="xl">
        <ImageList
          className={styles.imageList}
          variant="quilted"
          cols={6}
          gap={15}
        >
          {items &&
            items.map((item, index) => (
              <ImageListItem
                key={index}
                cols={item.cols || 1}
                rows={item.rows || 1}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className={classNames(styles.image)}
                  onClick={handleImageClick(index)}
                />
              </ImageListItem>
            ))}
        </ImageList>
      </Container>
    </>
  );
}
