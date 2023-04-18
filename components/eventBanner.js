import styles from "../styles/eventBanner.module.css";

export default function Banner() {
  return (
    <div className={styles.footerImg}>
      <div>
        <img
          src="/footerBanner.png"
          alt="Footer Image"
          className={styles.footerDesktop}
        />
        <img
          src="/footerRes.png"
          alt="Footer Image"
          className={styles.footerMob}
        />
      </div>
    </div>
  );
}
