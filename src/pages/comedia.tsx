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
    comedyMovies: Movie[]
}

export const getServerSideProps = async () => {

  const [
    comedyMovies
    
  ] = await Promise.all([

    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    
  ])

  return {
    props: {
        comedyMovies: comedyMovies.results,
      
      
    },
  }
}

export default function Comedia({ comedyMovies }: Props) {
  return (
    <div>
      
    <div className={styles.div}>
      <main>
      <Layout title="" movies={comedyMovies}/>
      </main>
      
    </div>
    
    </div>
    
    
    
    
  )
   
}