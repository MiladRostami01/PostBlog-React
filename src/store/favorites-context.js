import React, { createContext, useState } from 'react'

const FavContext = createContext({
  favorite:[],
  total: 0,
  addFavorite: (favoritePost)=>{},
  deleteFavorite: (postId)=>{},
  isAdded: (postId)=>{},
})

export function FavoritesContextProvider (props) {
  const [userFavorites, setUserFavorites] =useState([])
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
    <FavContext.Provider value={context}>
      {props.children}
    </FavContext.Provider>
  )
}

export default FavContext