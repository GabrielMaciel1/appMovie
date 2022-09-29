import Image from 'next/image'
import Link from 'next/link'
import { FaStar } from "react-icons/fa";
import { Movie } from '../../typings'
import styles from '../styles/Card.module.css'

interface Props {
  
  movie: Movie
}

const Card = ({ movie}: Props) => {
  return (
    <div className={styles.card}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        width="120"
        height="120"
        
      />
      
      
    </div>
  )
}

export default Card