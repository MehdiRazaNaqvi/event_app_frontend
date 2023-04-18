"use client";
import "../styles/attraction.css";
import "../components/responsive.css";

import Image from "next/image";

import "react-perfect-scrollbar/dist/css/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "../components/comment";
import Review from "../components/review/review";
import Corosoul from "../components/Corousel/corosoul";
import Cover from "../components/cover/cover";
import About from "../components/about/about";

import City from "./eventPage";

import HeroHeader from "../components/HeroHeader";
import SideNavbar from "../components/SideNavbr";
import HeaderContent from "../components/attractionAbout";
import Footer from "../components/footer";
import Banner from "../components/BannerPic";

import styles from "../styles/style.module.css";
import "../styles/globals.css";
import '../styles/globals.css';
import Navbar from "@/components/NavbarTransparent";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";


const Post = (props) => {


  const attraction = [{}]

  const [loading, setLoading] = useState(true)


  return (


    <div className="main_screen_base">
      {/* <Cover /> */}

      {/* <About /> */}

      <HeroHeader data={attraction} loading={loading} />

      <div
        className="attractionAboutComp"
        style={{ height: "maxContent", marginBottom: "3rem" }}
      >
        <HeaderContent data={attraction} loading={loading} />
        {/* <SideNavbar /> */}
      </div>


      {loading ?

        <Skeleton animation="wave" variant="rectangular" width="100%" height="35rem" />

        :

        <Corosoul data={attraction} loading={loading} />
      }


      <Review data={attraction} loading={loading} />

      <Comment data={attraction} loading={loading} />

      <Image
        className="page_bottom_cover"
        src="/cover.png"
        width={1000}
        height={200}
      ></Image>
    </div>



  );
};


export default Post;
