import React from 'react'
import Card from '../ui/Card'
import styles from './NewPostForm.module.css'

function NewPostForm() {
  return (
    <Card>
      <form action="" className={styles.form}>
        <div className={styles.formControll}>
          <label htmlFor="title">Tilte</label>
          <input id='title' type="text" placeholder='Enter title...' />
        </div>
        <div className={styles.formControll}>
          <label htmlFor="image">Image</label>
          <input id='image' type="url" placeholder='Enter url...' />
        </div>
        <div className={styles.formControll}>
          <label htmlFor="category">category</label>
          <input id='category' type="text" placeholder='Enter category...' />
        </div>
        <div className={styles.formControll}>
          <label htmlFor="description">Description</label>
          <textarea name="" id="description" rows="5" placeholder='Write something...'></textarea>
        </div>
        <div className={styles.actions}>
          <button type='submit'>Add Post</button>
        </div>
      </form>
      
    </Card>
  )
}

export default NewPostForm
