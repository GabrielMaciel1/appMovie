import styles from '../styles/Home.module.css'
import requests from '../utils/requests'
import logo from '../image/logo_netflix.png'
import Image from 'next/image'
import { Movie } from '../../typings'

import Layout from '../components/Layout'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'


interface Props {
    horrorMovies: Movie[]
}

export const getServerSideProps = async () => {

  const [
    horrorMovies
    
  ] = await Promise.all([

    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    
  ])

  return {
    props: {
        horrorMovies: horrorMovies.results,
      
      
    },
  }
}

export default function Terror({ horrorMovies }: Props) {
  return (
    <div>
      
    <div className={styles.div}>
      <main>
      <Layout title="" movies={horrorMovies}/>
      </main>
      
    </div>
    
    </div>
    
    
    
    
  )
   
}