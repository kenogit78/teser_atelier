import React from 'react'
import * as styles from '../styles/homepageshop.module.css'



const cardData = [
    {
        top_text: 'ANKARA',
        image: '/ankara9.jpg',    
    },
    {
        top_text: 'LACE',
        image: '/lace2.png',
    },
    {
        top_text: 'ENGLISH PRINT',
        image: '/engprint4B.jpg',
    },

]

export default function HomepageShop() {


    return (
        <div className={styles.homepageshop}  >
            <div className={styles.card_container}>
                {
                    cardData && cardData.map((data) => (
                        <div className={styles.cards}>
                            <img src={data.image} alt='english print' className={styles.card_images} />
                            <h3> {data.top_text} </h3>
                            <button> SHOP NOW </button>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}
