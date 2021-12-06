import React from "react"
import HomepageShop from "../components/HomepageShop"
import Layout from '../components/Layout'
import * as styles from '../styles/homepage.module.css'

export default function Home() {

  return (
    <Layout>
    

    <div className={styles['homepage']}>

      <div className={styles['text']} >
        <h1> T'ESER ATELIER</h1>
        <p className={styles['span']}> Your next attire deserves a touch of <span>professionalism</span>.   </p>
        {/* <p className={styles['span']}>  </p> */}
        <p className={styles['last']}> That's where we come in. </p>
        <button> SHOP NOW </button>
      </div>

      <div className={styles['image']}>
        <img src='/home.jpg' alt='homepage' />
        <img src='/homepa.jpg' alt='homepage' />
        <img src='/homepage.jpg' alt='homepage' />
      </div>
      
      <div className={styles['overlay']}></div>


    </div>

    <HomepageShop />

  </Layout>
  )
}
