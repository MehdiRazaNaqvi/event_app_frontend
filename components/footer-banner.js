import Style from './footer-banner.module.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import Image from 'next/image';
// import companyLogo from '../images/companyLogo.png'
// import compnayProfile from '../public/companyProfile.png'

const footerBanner = () => {
    return (
        <>
            <div className={Style.eventMaterialContainerBannerWrapper}>
                <div className={Style.eventMaterialContainerBanner}>
                    <div className={Style.eventMaterialBannerImage}>
                        <img
                            className={Style.personImg}
                            alt=""
                            src='/companyProfile.png'
                        />
                    </div>
                    <div className={Style.eventMaterialBannerContent}>
                        <div
                            className={Style.rectangleImg2}
                            alt=""
                        />
                        <img
                            className={Style.companyLogo}
                            alt=""
                            src='/companyLogo.png'
                        />

                        <div className={Style.text}>
                            <b> Meet Our Company </b>
                            <p >
                                SF Symbols were introduced during WWDC 2019.
                            </p>
                                <MDBBtn className={Style.btn}>
                                    <div className={Style.getItNow}>GET IT NOW</div>
                                </MDBBtn>
                        </div>

                        <div className={Style.bannerFrame} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default footerBanner;