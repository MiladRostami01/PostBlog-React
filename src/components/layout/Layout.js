import React from 'react'
import Navigation from './navigations/Navigation'
import styles from './Layout.module.css'

function Layout(props) {
  return (
    <header>
      <Navigation />
      <main className={styles.mainContent}>
        {props.children}
      </main>
    </header>
  )
}

export default Layout
