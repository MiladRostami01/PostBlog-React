import React from 'react'
import { useNavigate } from 'react-router-dom'
import NewPostForm from '../components/posts/NewPostForm'

function NewPost() {
  const navigate = useNavigate()

  function addPost (postData){
    fetch(
      'https://post-project-react-default-rtdb.firebaseio.com/posts.json',
      {
        method: 'POST',
        body: JSON.stringify(postData),
        header: {
          'Content-Type': 'application/json'
        },
      }
    ).then(()=>{
      navigate('/',{replace: true})
    })
  }

  return (
    <React.Fragment>
      <h2>New post</h2>
      <NewPostForm onAddPost={addPost}/>
    </React.Fragment>
  )
}

export default NewPost
