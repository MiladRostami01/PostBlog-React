import React from 'react'
import PostList from '../components/posts/PostList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first post',
    image: 'https://c1.35photo.pro/photos_col/r2/685/3425784_500r.jpg',
    category: 'self help',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error neque dolore quidem nobis non magni,',
  },
  {
    id: 'm2',
    title: 'This is a second post',
    image: 'https://c1.35photo.pro/photos_col/r2/430/2150730_500r.jpg',
    category: 'nature',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error neque dolore quidem nobis non magni',
  },
]

function AllPosts() {
  return (
    <React.Fragment>
      <h2>All Posts</h2>
      <PostList posts={DUMMY_DATA} />
    </React.Fragment>
  )
}

export default AllPosts

