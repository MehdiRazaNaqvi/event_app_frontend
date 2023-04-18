"use client"

import Navbar from '@/components/Navbar'
// import Navbar from '@/components/navbarMui/navbar'

// import BannerSlider from '@/components/Banner';

import Features from '@/components/Features';
import Attractions from '@/components/Attractions';
import Events from '@/components/Events';
import styles from '../app/page.module.css';
// import HomeCarousel from '@/components/HomeCarousel';
import BannerSlider from '@/components/Banner';
import Banner from '@/components/BannerPic';
import Search from '@/components/SearchBar';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Home(props) {


  const [events, setEvents] = useState([])



  const [loading, setLoading] = useState(true)


  useEffect(async () => {


    setLoading(true)


    axios.get("http://localhost:3001/v1/randomAttractions")
      // .then(res => setEvents(res.data?.data))
      .then(res => { setEvents(res?.data?.data); setLoading(false) })
      .catch(err => { console.log(err); setLoading(false) })




  }, [])







  return (
    <div className={styles.main}>
      <Navbar />

      {/* <Search /> */}
      <Features />
      {/* <HomeCarousel /> */}
      <BannerSlider />
      <Attractions />
      <Events />
      <Banner />
    </div>


  )
}