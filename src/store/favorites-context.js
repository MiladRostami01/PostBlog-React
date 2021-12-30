import React from 'react'
import { createContext, useState } from 'react/cjs/react.development'

export const favContext = createContext({
  favorite:[],
  total: 0,
  addFavorite: (favoritePost)=>{},
  deleteFavorite: (postId)=>{},
  isAdded: (postId)=>{},
})

function FavoritesContextProvider (props) {
  const [userFavorites, setUserFavorites] =useState([])
  console.log(userFavorites);
  function addFavorite(favoritePost){
    setUserFavorites(prevFavorites => {
      return prevFavorites.concat(favoritePost)
    })
  }
  function deleteFavorite (postId){
    setUserFavorites(prevFavorites =>{
      return prevFavorites.filter(post => post.id !== postId)
    })
  }
  function isAdded (postId){
    return userFavorites.some(post => post.id === postId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites : userFavorites.length,
    addFavorite: addFavorite,
    deleteFavorite: deleteFavorite,
    isAdded: isAdded,
  }

  return (
    <favContext.Provider value={context}>
      {props.children}
    </favContext.Provider>
  )
}

export default FavoritesContextProvider
