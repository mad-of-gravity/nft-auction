
import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss";
import classNames from "classnames";
import { useRouter } from 'next/router'

export default function Featured({items= []}) {
  const router = useRouter();

  const handleImageClick = (i) => {
    router.push(items[i].href);
  }

  return (
    <Container className={classNames(styles.featuredContainer)} maxWidth="xl">
      <ImageList 
        className={styles.imageList} 
        variant="quilted"
        cols={6}
        gap={15}
      >
        { items && items.map((item, index) => 
            <ImageListItem key={index} cols={item.cols || 1} rows={item.rows || 1}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={classNames(styles.image)}
                onClick={handleImageClick(index)}
              />
          </ImageListItem>)
        }
      </ImageList>
    </Container>
  );
}
