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
    romanceMovies: Movie[]
}

export const getServerSideProps = async () => {

  const [
    romanceMovies
    
  ] = await Promise.all([

    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    
  ])

  return {
    props: {
        romanceMovies: romanceMovies.results,
      
      
    },
  }
}

export default function Romance({ romanceMovies }: Props) {
  return (
    <div>
      
    <div className={styles.div}>
      <main>
      <Layout title="" movies={romanceMovies}/>
      </main>
      
    </div>
    
    </div>
    
    
    
    
  )
   
}