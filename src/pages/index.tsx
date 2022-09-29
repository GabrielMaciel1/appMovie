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
  allMovies: Movie[] 
}

export const getServerSideProps = async () => {

  const [
    allMovies
    
  ] = await Promise.all([

    fetch(requests.fetchMovies).then((res) => res.json()),
    
  ])

  return {
    props: {
      allMovies: allMovies.results,
      
      
    },
  }
}

export default function Home({ allMovies }: Props) {
  return (
    <div>
      <Navbar/>
    <div className={styles.div}>
      <main>
      <Layout title="Trending Now" movies={allMovies}/>
      </main>
      
    </div>
    
    </div>
    
    
    
    
  )
   
}
