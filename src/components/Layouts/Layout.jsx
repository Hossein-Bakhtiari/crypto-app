import React from 'react'
import styles from "./layout.module.css"

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
            <h1>Crypto App</h1>
            <p><a href="https://github.com/Hossein-Bakhtiari/crypto-app">gitHub </a>| React.js Project</p>
        </header>
        {children}
        
    </>
  )
} 

export default Layout