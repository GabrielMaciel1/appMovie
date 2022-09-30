import styles from '../styles/Home.module.css'
import requests from '../utils/requests'

import Image from 'next/image'
import { Movie } from '../../typings'

import Layout from '../components/Layout'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import Navbar from '../components/NavBar'





interface Props {
    title: string
  getMovie: Movie[]
  
  
}

export const getServerSideProps = async () => {
    

  const [
    getMovie
    
  ] = await Promise.all([

    fetch(requests.fetchMovie).then((res) => res.json()),
  ])

  return {
    props: {
        getMovie: getMovie.results,
      
      
    },
  }
}

export default function Search({ getMovie, title }) {
   
  
  return (
    
    <div className={styles.div}>
      
      <div className={styles.div}>
      <main>
      <Layout title="" movies={getMovie}/>
      </main>
      
    </div>
      
    </div>

  )
    
      
    
  
}
      
      
   
    
    
    
 
