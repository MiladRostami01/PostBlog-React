import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
import FavContext from '../../../store/favorites-context'

function Navigation() {
  const favoritesCtx =useContext(FavContext);

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
