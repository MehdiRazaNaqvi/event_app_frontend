// import Head from "next/head";
// import Image from "next/image";
import styles from "../../styles/style.module.css";
// import Header from "../Components/Header.js";

import HeroHeader from "../../components/HeroHeader";
import HeaderContent from "../../components/HeaderContent";
import Banner from "../../components/eventBanner";
import Navbar from "../../components/eventNav";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Home() {
  const [newApi, setNewApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const id = router?.query?.id;

  useEffect(() => {
    const getApi = async () => {

      setLoading(true);

      try {
        let fetchData = await axios.get(
          `http://localhost:3001/v1/getEventData?id=${id}`
        );
        fetchData = fetchData.data;
        setNewApi(fetchData.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getApi();
  }, [id]);



  return (
    <div>
      <Navbar />
      <HeroHeader loading={loading} />

      <div className={styles.heroHeaderContent}>
        <HeaderContent data={newApi} loading={loading} />
      </div>

      <Banner />
    </div>
  );
}
