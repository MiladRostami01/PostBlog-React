import React from 'react'
import PostItem from './PostItem'
import styles from './PostList.module.css'

function PostList({posts}) {
  return (
    <ul className={styles.ul}>
      {posts.map(post => <PostItem key={post.id} post={post} />)}
    </ul>
  )
}

export default PostList
