// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContent}>
        <h1>Don't see the answer you're looking for? Post Your Question</h1>
        <p>
          Your question might be answered by the host, speakers or 
        </p>
        <div className={styles.commentSection}>
          <div className={styles.comment1}>
            <div className={styles.commentStyle}>
              <p>
                <Image
                  src="/Oval.png"
                  alt="Comment section pic"
                  width={24}
                  height={26}
                />
                <span className={styles.logoName}>amyrobson</span>
              </p>
              <p>1 month ago</p>
            </div>
            <span>
              Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You’ve nailed the design and the
              responsiveness at various breakpoints works really well.
            </span>
          </div>
        </div>
        <div className={styles.commentSection}>
          <div className={styles.comment1}>
            <div className={styles.commentStyle}>
              <p>
                <Image
                  src="/Oval1.png"
                  alt="Comment section pic"
                  width={24}
                  height={26}
                />
                <span className={styles.logoName}> maxblagun</span>
              </p>
              <p>2 weeks ago</p>
            </div>
            <span>
              Woah, your project looks awesome! How long have you been coding
              for? I’m still new, but think I want to dive into React as well
              soon. Perhaps you can give me an insight on where I can learn
              React? Thanks!
            </span>
          </div>
        </div>
        <div className={styles.commentTextArea}>
          <div>
            <textarea
              className={styles.commentArea}
              rows="5"
              placeholder="Add a comment. Use ‘@’ to tag people"
            ></textarea>
          </div>
          <div className={styles.commentFooter}>
            <Image
              src="/Oval2.png"
              alt="Comment section pic"
              width={24}
              height={26}
            />
            <button>Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
}
