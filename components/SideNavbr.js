// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/sideNavbar.module.css";
export default function SideNavbar() {
  return (
    <div className={styles.sideNavbarContainer}>
      <div className={styles.sideNavbar}>
        <div className={styles.sideNavbarContent}>
          <div className={styles.text}>
            <small>Starting From</small>
            <div className={styles.firstSideNavbar}>
              <p className={styles.lineText}>$130</p>

              <p className={styles.linePara}>$ 100</p>
            </div>
          </div>

          <div className={styles.text}>
            <small>Date</small>
            <div>
              <p>25 Oct 2022</p>
            </div>
          </div>
          <div className={styles.text}>
            <small>Time</small>
            <div>
              <p>7:30 pm</p>
            </div>
          </div>
          <div className={styles.text}>
            <small>Duration</small>
            <div>
              <p>120 min</p>
            </div>
          </div>
          <div className={styles.text}>
            <small>Overall Rating</small>
            <div className={styles.starContent}>
              <div className={styles.starImg}>
                <Image
                  src="/star.png"
                  alt="Star Number"
                  width={18}
                  height={18}
                />
              </div>
              <div className="starText">
                <p>
                  4.5 <span>(230)</span>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.text}>
            <small>Location</small>
            <div>
              <p>Morumbi Stadium, São Paulo, Brazil</p>
            </div>
          </div>
          <button className={styles.btn}>Buy Tickets</button>
        </div>
      </div>
      <div className={styles.banner}>
        <Image src="/Banner.png" alt="Banner" width={390} height={600} />
      </div>
      <div className={styles.bannerRes}>
        <Image src="/mediabanner.png" alt="Banner" width={500} height={150} />
      </div>
    </div>
  );
}
