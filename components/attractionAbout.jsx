// import Head from "next/head";
import Image from "next/image";
import styles from "../styles/style.module.css";
import "../styles/style.module.css";

import "./responsive.css"


export default function HeaderContent({ data }) {

  
  return (


    <div style={{ width: "100%", overflow: "hidden", minHeight: "maxContent" }} >


      <h1 className="attraction_main_head">{data[0]?.title}</h1>
      <h2 className={styles.headingMob}>
        Directly seated and inside for you to enjoy the show.
      </h2>



      <div style={{ paddingLeft: "0px", paddingRight: "0px" }} className={styles.Container}>


        <div className={styles.Content}>
          <div className={styles.eventsContainer}>
            <div className={styles.eventsContents}>
              <div className={styles.events}>
                <h2>This event includes</h2>

                <div className={styles.eventsContent}>
                  <div className={styles.event1}>
                    <div>
                      <Image
                        src="/thumb.png"
                        alt="Header image"
                        width={24}
                        height={26}
                      />
                      <span className={styles.spanItem}>
                        Direct interaction with the instructor
                      </span>
                    </div>
                  </div>
                  <div className={styles.event2}>
                    <div>
                      <Image
                        src="/computer.png"
                        alt="Header image"
                        width={24}
                        height={26}
                      />
                      <span className={styles.spanItem}>
                        Access on mobile and web
                      </span>
                    </div>
                  </div>
                  <div className={styles.event3}>
                    <div>
                      <Image
                        src="/camera.png"
                        alt="Header image"
                        width={24}
                        height={26}
                      />
                      <span className={styles.spanItem}>
                        Session recording after the workshop
                      </span>
                    </div>
                  </div>
                  <div className={styles.event4}>
                    <div>
                      <Image
                        src="/timer.png"
                        alt="Header image"
                        width={24}
                        height={26}
                      />
                      <span className={styles.spanItem}>
                        1 hour live session
                      </span>
                    </div>
                  </div>
                  <div className={styles.squarePic}>
                    <Image
                      src="/sq.png"
                      alt="square picture"
                      width={150}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.aboutEvent}>
              <h2>About the Event</h2>
              <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </span>
              <ul>
                <li>Section 1.10.32 of "de Finibus Bonorum et Malorum",</li>
                <li>of Finibus Bonorum et Malorum"de ", </li>
                <li>1914 translation by H. Rackham</li>
              </ul>
              <Image
                src="/Location.png"
                alt="Read More"
                width={100}
                height={30}
              />
            </div>
          </div>



        </div>


        <div style={{ display: "flex", minWidth: "30%", justifyContent: "center", alignItems: "center", flexDirection: "column" }} className={styles.sideNavbarContainer}>

          <div style={{ width: '100%' }} className={styles.sideNavbar}>

            <div style={{ display: 'flex', width: "100%", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} className={styles.sideNavbarContent}>
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
                      width={16}
                      height={16}
                    />
                  </div>
                  <div className={styles.starText}>
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

              <button style={{ alignSelf: "center", marginTop: "1rem" }} className={styles.btn}>Buy Tickets</button>
            </div>
          </div>


          <div className={styles.banner} style={{ width: "100%" }}>
            <img src="/Banner.png" alt="Banner" />

          </div>


          <div className={styles.bannerRes}>

            <Image
              className="attraction_middle_banner"
              src="/mediabanner.png"
              style={{ width: "100%" }}
              alt="Banner"
              width={360}
              height={100}
            />
          </div>
        </div>



      </div>



    </div>
  );
}
