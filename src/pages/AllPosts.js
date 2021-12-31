import React, { useEffect, useState } from 'react'
import PostList from '../components/posts/PostList'

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first post',
//     image: 'https://c1.35photo.pro/photos_col/r2/685/3425784_500r.jpg',
//     category: 'self help',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error neque dolore quidem nobis non magni,',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second post',
//     image: 'https://c1.35photo.pro/photos_col/r2/430/2150730_500r.jpg',
//     category: 'nature',
//     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error neque dolore quidem nobis non magni',
//   },
// ]

function AllPosts() {
  const [isLoading, setIsLoading] = useState(true)
  const [postData, setPostData] = useState([])

  useEffect(()=>{
    fetch(
      'https://post-project-react-default-rtdb.firebaseio.com/posts.json'
    ).then(response => {
      return response.json()
    }).then(data =>{
      const posts = []

      for (const key in data) {
        const post ={
          id: key,
          ...data[key]
        }

        posts.push(post) 
      }

      setIsLoading(false)
      setPostData(posts)
    })
  },[])
  

  if(isLoading){
    return <h2>Loading...</h2>
  }

  return (
    <React.Fragment>
      <h2>All Posts</h2>
      <PostList posts={postData} />
    </React.Fragment>
  )
}

export default AllPosts

