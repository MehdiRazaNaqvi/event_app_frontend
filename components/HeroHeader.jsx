import styles from "../styles/style.module.css";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



const HeroHeader = (props) => {

  console.log(props)
  return (

    props.loading ?

      <div style={{ margin: "0px" }} className={styles.hero_header_container}>

        <Stack spacing={1}>
          <Skeleton animation="wave" variant="rectangular" width="100%" height="25rem" />
        </Stack>



      </div>


      :


      <div style={{ margin: "0px" }} className={styles.hero_header_container}>
        <div className={styles.hero_header_image}>
          <img

            src={"/header-img.png"}
            alt={"hero header image"}
            className={styles.desktop}

          />
          <img
            src={"/Assets/hero_header_mobile.png"}
            alt={"hero header image"}
            className={styles.mobile}
          />
        </div>
      </div>


  );
};

export default HeroHeader;
