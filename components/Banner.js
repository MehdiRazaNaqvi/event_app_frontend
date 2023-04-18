import { useState } from "react"
import styles from '../app/page.module.css'
import Carousel from "react-material-ui-carousel"


const images = [
    {
        img: '/images/zong-ad-banner.jpg',
        title: 'Zong-Ad',
        width: 20000,
        height: 10000
    },
    {
        img: '/images/Jazz.jpg',
        title: 'Zong-Ad',
        width: 2000,
        height: 1000
    },
    {
        img: '/images/Ufone.jpg',
        title: 'Zong-Ad',
        width: 2000,
        height: 1000
    }
]




const BannerSlider = () => {
    const [activeBanner, setActiveBanner] = useState(0);

    const handleBannerChange = (banner) => {
        setActiveBanner(banner);
    }

    //const maxBanner = images.length;

    return (
        <div className={styles.bannerDiv}>
            <h1 className={styles.bannerText}><b>Offers for you</b></h1>
            <div style={{ width: '90%', height: '50%', borderRadius: '30px' }}>
                <Carousel
                    autoPlay={true}
                    animation={"slide"}
                    navButtonsAlwaysVisible={true}
                    cycleNavigation={true}
                    interval={5000}
                    index={activeBanner}
                    onChange={handleBannerChange}
                    indicators={false}
                    
                >
                    {images.map((image, index) => {
                        return (
                            <div key={index}>
                                {Math.abs(activeBanner - index) <= 2 ? (
                                    <img
                                        src={image.img}
                                        alt={image.title}
                                        className={styles.carouselImg}
                                    />
                                ) : null}
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        </div>
    )
}


export default BannerSlider;
