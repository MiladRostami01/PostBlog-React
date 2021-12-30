import React from 'react'
import { useContext } from 'react/cjs/react.development'
import { favContext } from '../store/favorites-context'
import PostList from '../components/posts/PostList'

function Favorites() {
  const favoritesCtx = useContext(favContext)

  let content
  if(favoritesCtx.totalFavorites === 0){
    content = <h3 style={{marginTop: "40px"}}>Yot got no favorites yet. Start adding some...</h3>
  }else{
    content = <PostList posts={favoritesCtx.favorites}/>
  }

  return (
    <React.Fragment>
      <h2>Favorites</h2>
      {content}
    </React.Fragment>
  )
}

export default Favorites
