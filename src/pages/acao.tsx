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
  actionMovies: Movie[]
}

export const getServerSideProps = async () => {

  const [
    actionMovies
    
  ] = await Promise.all([

    fetch(requests.fetchActionMovies).then((res) => res.json())
    
  ])

  return {
    props: {
      actionMovies: actionMovies.results,
      
      
    },
  }
}

export default function Acao({ actionMovies }: Props) {
  return (
    <div>
      
    <div className={styles.div}>
      <main>
      <Layout title="" movies={actionMovies}/>
      </main>
      
    </div>
    
    </div>
    
    
    
    
  )
   
}
