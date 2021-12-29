import React from 'react'
import Card from '../ui/Card'
import styles from './PostItem.module.css'

function PostItem({post}) {
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
        <button>To Favorites</button>    
      </div>
    </Card>
  )
}

export default PostItem
