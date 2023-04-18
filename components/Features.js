import styles from '../app/page.module.css'
import useMediaQuery from '@mui/material/useMediaQuery'

const features = [
    { 
        name: 'Activities',
        src : '/images/destination1@2x.png'
    },
    { 
        name: 'Attractions',
        src : '/images/eiffeltower@2x.png'
    },
    { 
        name: 'Events',
        src : '/images/shoppingmall@2x.png'
    },
    { 
        name: 'Sports',
        src : '/images/parachute@2x.png'
    },
    { 
        name: 'Wifi' ,
        src : '/images/eiffeltower@2x.png'
    },
    { 
        name: 'Concerts' ,
        src : '/images/shoppingmall@2x.png'
    },
    { 
        name: 'Events' ,
        src : '/images/destination1@2x.png'
    },
    { 
        name: 'Sports',
        src : '/images/destination1@2x.png'
     },
    { 
        name: 'Wifi' ,
        src : '/images/spotlight@2x.png'
    },
    { 
        name: 'Concerts' ,
        src : '/images/skiing@2x.png'
    },
    { 
        name: 'Events',
        src : '/images/destination1@2x.png'
     },
    { 
        name: 'Sports' ,
        src : '/images/parachute@2x.png'
    },
]

const Features = () => {
    const media = useMediaQuery('(max-width : 767px)')

    const visibleFeatures = media ? features.slice(0, 9) : features;

    return (
        <ul className={styles.featuresDiv}>
            {visibleFeatures.map((feature, index) => {
                return (
                    <button key={index} className={styles.features}>
                        <img src={feature.src} className={styles.btnImage} />
                        <p className={styles.ftrText}>{feature.name}</p>
                    </button>
                )
            })}
        </ul>
    )
}

export default Features;
