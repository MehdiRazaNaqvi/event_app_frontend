// import React from 'react'

import Eventmaterial from "../components/event-material";
import Carousel from "../components/carousel";
// import Navbar from '../components/navbar'
import Framecontainer from "@/components/frame-container";
import Footerbanner from "../components/footer-banner";

export default function HomePage() {
  return (
    <>
      <div>{/* <Navbar /> */}</div>
      <div>
        <Carousel />
      </div>
      <div>
        <Eventmaterial />
      </div>
      <div>
        <Framecontainer />
      </div>
      <div>
        <Footerbanner />
      </div>
    </>
  );
}
