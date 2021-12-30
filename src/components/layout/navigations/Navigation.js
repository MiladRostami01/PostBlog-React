import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react/cjs/react.development'
import { favContext } from '../../../store/favorites-context'
import styles from './Navigation.module.css'

function Navigation() {
  const favoritesCtx =useContext(favContext)

  return (
    <header className={styles.header}>
      <nav className={styles.headerContainer}>
        <h1 className={styles.logo}>My Logo</h1>
        <ul className={styles.navUl}>
          <li>
            <Link to={'/'} >AllPosts </Link>
          </li>
          <li>
            <Link to={'new-post'} >NewPost </Link>
          </li>
          <li>
            <Link to={'favorites'} >Favorites <span>{favoritesCtx.totalFavorites}</span> </Link>
            
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
