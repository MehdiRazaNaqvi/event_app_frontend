import styles from '../app/page.module.css';
import { Card, CardHeader, CardContent, CardMedia, Typography, useMediaQuery } from '@mui/material';
import 'react-perfect-scrollbar/dist/css/styles.css';
import ScrollBar from 'react-perfect-scrollbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const posts = [
//   {
//     id: 1,
//     link: '/attraction',
//     img: '/images/nyc.png',
//     heading: `2011 Super Junior SM Town Live '10 World Tour New York City`,
//     para: `Directly seated and inside for you to enjoy the show.`,
//   },
//   {
//     id: 2,
//     link: '/eventPage',
//     img: '/images/nyc.png',
//     heading: `2011 Super Junior SM Town Live '10 World Tour New York City`,
//     para: `Directly seated and inside for you to enjoy the show.`,
//   },
//   {
//     id: 3,
//     link: '/city',
//     img: '/images/nyc.png',
//     heading: `2011 Super Junior SM Town Live '10 World Tour New York City`,
//     para: `Directly seated and inside for you to enjoy the show.`,
//   },
// ];

const Attractions = ({ events, loading }) => {
  //const MAX_POSTS_WITHOUT_SCROLL = 1;
  const media = useMediaQuery('(max-width: 1300px)');
  const [isMobile, setIsMobile] = useState(media);
  const [isScrollable, setIsScrollable] = useState(false);
  const [posts, setPosts] = useState([])


  useEffect(() => {
    setPosts(events)
  }, [events])

  useEffect(() => {
    setIsMobile(media);
    setIsScrollable(posts.length > 0);
  }, [media]);

  // useEffect(() => {

  //   const getAPI = async () => {
  //     let fetchdata = await axios.get("http://localhost:3001/v1/randomEvents");
  //     fetchdata = fetchdata.data;
  //     setNewAPI(fetchdata);
  //   }

  //   getAPI();
  // }, [])

  //console.log(newAPI)

  return (
    <div className={styles.parentDv}>
      <div className={styles.mainContainer}>
        <h1 className={styles.postsHeading}><b>Attractions near you</b></h1>
        {
          loading ?

            isMobile ? (
              <ScrollBar
                sx={{
                  display: 'flex',
                  overflowX: 'scroll',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none', // Optional: for iOS momentum scrolling
                }} s
                className={styles.postsContainer}
              >
                {/* {newAPI.data?.map((post) => ( */}
                {posts?.map((post) => (
                  <a key={post?.event_id} href={`/eventPage/${post?.event_id}`} className={styles.event}>
                    <Card className={styles.postCard}>
                      <img className={styles.cardImage} src='/images/nyc.png' alt="Image" />

                      <div className={styles.textContent}>
                        <h1 className={styles.cardHeading}><b>{post?.title}</b></h1>


                        <p className={styles.postContent}>
                          {post?.description}
                        </p>

                      </div>
                    </Card>
                  </a>
                ))}
              </ScrollBar>
            ) : (
              <ScrollBar
                sx={{
                  display: 'flex',
                  overflowX: 'scroll',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none', // Optional: for iOS momentum scrolling
                }}
                className={styles.postsContainer}
              >
                {posts?.map((post) => (
                  <a key={post?.event_id} href={`/eventPage/${post?.event_id}`} className={styles.event}>
                    <Card className={styles.postCard}>
                      <img className={styles.cardImage} src='/images/nyc.png' alt="Image" />

                      <div className={styles.textContent}>
                        <b className={styles.cardHeading}>{post?.title}</b>

                        <p className={styles.postContent}>
                          {post?.description}
                        </p>
                      </div>
                    </Card>
                  </a>
                ))}
              </ScrollBar>
            )

            :


            isMobile ? (
              <ScrollBar
                sx={{
                  display: 'flex',
                  overflowX: 'scroll',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none', // Optional: for iOS momentum scrolling
                }} s
                className={styles.postsContainer}
              >
                {/* {newAPI.data?.map((post) => ( */}
                {posts?.map((post) => (
                  <a key={post?.event_id} href={`/eventPage/${post?.event_id}`} className={styles.event}>
                    <Card className={styles.postCard}>
                      <img className={styles.cardImage} src='/images/nyc.png' alt="Image" />

                      <div className={styles.textContent}>
                        <h1 className={styles.cardHeading}><b>{post?.title}</b></h1>


                        <p className={styles.postContent}>
                          {post?.description}
                        </p>

                      </div>
                    </Card>
                  </a>
                ))}
              </ScrollBar>
            ) : (
              <ScrollBar
                sx={{
                  display: 'flex',
                  overflowX: 'scroll',
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none', // Optional: for iOS momentum scrolling
                }}
                className={styles.postsContainer}
              >
                {posts?.map((post) => (
                  <a key={post?.event_id} href={`/eventPage/${post?.event_id}`} className={styles.event}>
                    <Card className={styles.postCard}>
                      <img className={styles.cardImage} src='/images/nyc.png' alt="Image" />

                      <div className={styles.textContent}>
                        <b className={styles.cardHeading}>{post?.title}</b>

                        <p className={styles.postContent}>
                          {post?.description}
                        </p>
                      </div>
                    </Card>
                  </a>
                ))}
              </ScrollBar>
            )}
      </div>
    </div>
  )
}


export default Attractions;
