import styles from "../styles/eventNavbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_container}>
        <img src={"/logo.png"} alt={"logo"} className={styles.logo_icon} />
        <img src={"/menu.png"} alt={"logo"} className={styles.menu_icon} />
      </div>
    </div>
  );
};

export default Navbar;
