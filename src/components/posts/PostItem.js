import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { favContext } from '../../store/favorites-context'
import Card from '../ui/Card'
import styles from './PostItem.module.css'

function PostItem({post}) {
  const favoritesCtx = useContext(favContext)

  const postIsAdded = favoritesCtx.isAdded(post.id)

  function toggleFavoriteStatusHandler (){
    if(postIsAdded){
      favoritesCtx.deleteFavorite(post.id)
    }else{
      favoritesCtx.addFavorite(post)
    }
  }

  return (
    <Card>
      <div className={styles.imgContainer}>
        <img src={post.image} alt="" />
      </div>
      <div className={styles.content}>
        <h3>{post.title}</h3>
        <h4>{post.category}</h4>
        <p>{post.description}</p>
      </div>
      <div className={styles.btn}>
        <button onClick={toggleFavoriteStatusHandler}>{postIsAdded ? "Remove from favorites" : "To Favorites" }</button>    
      </div>
    </Card>
  )
}

export default PostItem
