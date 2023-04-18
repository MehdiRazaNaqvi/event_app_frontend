import { MDBBtn } from "mdb-react-ui-kit";
import Style from "./event-material.module.css";
import Image from "next/image";
// import Image from 'next/image'
// import personImg from '/personImg.jpg'
// import companyLogo from '../images/companyLogo.png'

const eventMaterial = () => {
  return (
    <>
      <div className={Style.eventMaterialContainerWrapper}>
        <div className={Style.eventMaterialContainerBox1}>
          <div className={Style.eventMaterialContent}>
            <h1> New York </h1>
            <p>
              {" "}
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
            <ul>
              <li>
                {" "}
                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci velit... "
              </li>
              <li>
                {" "}
                "There is no one who loves pain itself, who seeks after it and
                wants to have it, simply because it is pain..."{" "}
              </li>
              <li> The standard Lorem Ipsum passage, used since the 1500 </li>
            </ul>
          </div>
          <div className={Style.eventIncludes}>
            <h1> New York Dinner Cruise </h1>
            <h3> This event includes </h3>
            <div className={Style.eventsContent}>
              <div className={Style.event}>
                <div>
                  <Image
                    src="/thumb.png"
                    alt="Header image"
                    width={24}
                    height={26}
                  />
                  <span className={Style.spanItem}>
                    Direct interaction with the instructor
                  </span>
                </div>
              </div>
              <div className={Style.event}>
                <div>
                  <Image
                    src="/computer.png"
                    alt="Header image"
                    width={24}
                    height={26}
                  />
                  <span className={Style.spanItem}>
                    Access on mobile and web
                  </span>
                </div>
              </div>
              <div className={Style.event}>
                <div>
                  <Image
                    src="/camera.png"
                    alt="Header image"
                    width={24}
                    height={26}
                  />
                  <span className={Style.spanItem}>
                    Session recording after the workshop
                  </span>
                </div>
              </div>
              <div className={Style.event}>
                <div>
                  <Image
                    src="/timer.png"
                    alt="Header image"
                    width={24}
                    height={26}
                  />
                  <span className={Style.spanItem}>1 hour live session</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.eventMaterialContainerBannerWrapper}>
          <div className={Style.eventMaterialContainerBanner}>
            <div className={Style.eventMaterialBannerImage}>
              <img className={Style.personImg} alt="" src="/personImg.jpg" />
            </div>
            <div className={Style.eventMaterialBannerContent}>
              <div className={Style.rectangleImg2} alt="" />
              <img
                className={Style.companyLogo}
                alt=""
                src="/companyLogo.png"
              />
              <b className={Style.text}>
                <p>Meet Our Company</p>
              </b>
              <div className={Style.text}>
                <p>SF Symbols were introduced during WWDC 2019.</p>
              </div>

              <MDBBtn className={Style.btn}>
                <div className={Style.getItNow}>GET IT NOW</div>
              </MDBBtn>
              <div className={Style.bannerFrame} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default eventMaterial;
