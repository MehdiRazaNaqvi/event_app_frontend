"use client";
import "../../styles/attraction.css";
import "../../components/responsive.css";

import Image from "next/image";

import "react-perfect-scrollbar/dist/css/styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Comment from "../../components/comment";
import Review from "../../components/review/review";
import Corosoul from "../../components/Corousel/corosoul";
// import Cover from "../components/cover/cover";
// import About from "../components/about/about";

// import City from "./eventPage";

import HeroHeader from "../../components/HeroHeader";
// import SideNavbar from "../../components/SideNavbr";
import HeaderContent from "../../components/attractionAbout";
// import Footer from "../components/footer";
// import Banner from "../components/BannerPic";

// import styles from "../styles/style.module.css";
import "../../styles/globals.css";
import '../../styles/globals.css';
// import Navbar from "@/components/NavbarTransparent";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const Post = () => {

  const [newAPI, setNewAPI] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router?.query?.id;

  useEffect(() => {
    const getApi = async () => {
      setLoading(true);
      try {
        let fetchData = axios.get(
          `http://localhost:3001/v1/getEventData?id=${id}`
        );
        fetchData = fetchData.data;
        setNewAPI(fetchData.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    }

    getApi();
  }, [id]);

  if (loading) return "Loading";

  return (
    <div className="main_screen_base">
      {/* <Cover /> */}

      {/* <About /> */}

      <HeroHeader />

      <div
        className="attractionAboutComp"
        style={{ height: "maxContent", marginBottom: "3rem" }}
      >
        <HeaderContent data={newAPI} />
        {/* <SideNavbar /> */}
      </div>

      <Corosoul />

      <Review />

      <Comment />

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
