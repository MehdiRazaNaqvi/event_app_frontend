// import img from 'next/img';
import style from "./frame-container.module.css";
import ScrollBar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
// import shoppingImg from '../imgs/shoppingmall@2x.png';
// import eiffeltowerImg from '../imgs/eiffeltower@2x.png';
// import fastfoodImg from '../imgs/fastfood@2x.png';
// import parachuteImg from '../imgs/parachute@2x.png';
// import skidivingImg from '../imgs/skiing@2x.png';
// import destinationImg from '../imgs/destination.png';
// import spotlightsImg from '../imgs/spotlight@2x.png';
import Link from "next/link";

const frameContainer = () => {
  const shoppingBtn = () => {
    console.log("Working");
    <Link
      href={
        "https://www.tripadvisor.com/Attractions-g60763-Activities-c26-t143-New_York_City_New_York.html"
      }
    />;
  };

  return (
    <>
      <div className={style.frameContainerWrapper}>
        <div className={style.categoriesParent}>
          <h1 className={style.heading}> Categories </h1>

          <div className={style.categoriesGroup}>
            <button className={style.iconParent} onClick={shoppingBtn}>
              <img
                className={style.iconImg}
                alt=""
                src="/shoppingmall@2x.png"
              />
              <b className={style.catName}> Shopping </b>
            </button>

            <button className={style.iconParent}>
              <img className={style.iconImg} alt="" src="/eiffeltower@2x.png" />
              <b className={style.catName}> Attraction </b>
            </button>

            <button className={style.iconParent}>
              <img className={style.iconImg} alt="" src="/fastfood@2x.png" />
              <b className={style.catName}> Food </b>
            </button>

            <button className={style.iconParent}>
              <img className={style.iconImg} alt="" src="/parachute@2x.png" />
              <b className={style.catName}> Skydiving </b>
            </button>

            <button className={style.iconParent}>
              <img className={style.iconImg} alt="" src="/skiing@2x.png" />
              <b className={style.catName}> Water Sports </b>
            </button>

            <button className={style.iconParent}>
              <img className={style.iconImg} alt="" src="/destination.png" />
              <b className={style.catName}> Ciry Tours </b>
            </button>

            <button className={style.iconParent}>
              <img className={style.iconImg} alt="" src="/spotlight@2x.png" />
              <b className={style.catName}> Concerts </b>
            </button>
          </div>

          <div className={style.allCityAttractionsParent}>
            <h1 className={style.heading}> All City Attractions </h1>
            <ScrollBar className={style.eventParent}>
              <a className={style.event} href="/city">
                <img className={style.eventChild} alt="" src="/crousel2.png" />
                <div className={style.detail}>
                  <div className={style.eventDetailRight}>
                    <b className={style.superJuniorSm}>
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className={style.directlySeatedAnd}>
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </a>
              <a className={style.event}>
                <img className={style.eventChild} alt="" src="/crousel2.png" />
                <div className={style.detail}>
                  <div className={style.eventDetailRight}>
                    <b className={style.superJuniorSm}>
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className={style.directlySeatedAnd}>
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </a>
              <a className={style.event}>
                <img className={style.eventChild} alt="" src="/crousel2.png" />
                <div className={style.detail}>
                  <div className={style.eventDetailRight}>
                    <b className={style.superJuniorSm}>
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className={style.directlySeatedAnd}>
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </a>
            </ScrollBar>
          </div>

          <div className={style.allCityAttractionsParent}>
            <h1 className={style.heading}> All City Events </h1>
            <ScrollBar className={style.eventParent}>
              <a className={style.event}>
                <img className={style.eventChild} alt="" src="/crousel2.png" />
                <div className={style.detail}>
                  <div className={style.eventDetailRight}>
                    <b className={style.superJuniorSm}>
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className={style.directlySeatedAnd}>
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </a>
              <a className={style.event}>
                <img className={style.eventChild} alt="" src="/crousel2.png" />
                <div className={style.detail}>
                  <div className={style.eventDetailRight}>
                    <b className={style.superJuniorSm}>
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className={style.directlySeatedAnd}>
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </a>
              <a className={style.event}>
                <img className={style.eventChild} alt="" src="/crousel2.png" />
                <div className={style.detail}>
                  <div className={style.eventDetailRight}>
                    <b className={style.superJuniorSm}>
                      2011 Super Junior SM Town Live '10 World Tour New York
                      City
                    </b>
                    <div className={style.directlySeatedAnd}>
                      Directly seated and inside for you to enjoy the show.
                    </div>
                  </div>
                </div>
              </a>
            </ScrollBar>
          </div>
        </div>
      </div>
    </>
  );
};

export default frameContainer;
