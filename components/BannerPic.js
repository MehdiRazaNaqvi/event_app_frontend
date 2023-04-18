import Image from "next/image";
import styles from "../styles/banner.module.css";

export default function Banner() {
  return (
    <div className={styles.footerImg}>
      <Image src="/footerBanner.png" alt="Footer Image" width={700} height={250} />
    </div>
  );
}
