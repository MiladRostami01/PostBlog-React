import React, { useRef } from 'react'
import Card from '../ui/Card'
import styles from './NewPostForm.module.css'

function NewPostForm(props) {
  const titleRef = useRef()
  const imageRef = useRef()
  const categoryRef = useRef()
  const descriptionRef = useRef()

  function submitHandler(e){
    e.preventDefault();

    const enteredTitle = titleRef.current.value
    const enteredImage = imageRef.current.value
    const enteredCategory = categoryRef.current.value
    const enteredDescription = descriptionRef.current.value

    const postData = {
      title: enteredTitle,
      image: enteredImage,
      category: enteredCategory,
      description: enteredDescription
    }

    props.onAddPost(postData)
  }

  return (
    <Card>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formControll}>
          <label htmlFor="title">Tilte</label>
          <input id='title' type="text" placeholder='Enter title...' ref={titleRef}/>
        </div>
        <div className={styles.formControll}>
          <label htmlFor="image">Image</label>
          <input id='image' type="url" placeholder='Enter url...' ref={imageRef} />
        </div>
        <div className={styles.formControll}>
          <label htmlFor="category">category</label>
          <input id='category' type="text" placeholder='Enter category...' ref={categoryRef}/>
        </div>
        <div className={styles.formControll}>
          <label htmlFor="description">Description</label>
          <textarea name="" id="description" rows="5" placeholder='Write something...' ref={descriptionRef}></textarea>
        </div>
        <div className={styles.actions}>
          <button type='submit'>Add Post</button>
        </div>
      </form>
      
    </Card>
  )
}

export default NewPostForm
