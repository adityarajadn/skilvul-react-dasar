import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Card from './components/Card'
import CardBuah from './components/CardBuah'
import CardContainer from './components/CardContainer'

function App() {
  let buah = ['Semangka', 'Jambu', 'Mangga', 'Rambutan']
  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <p>Selamat Datang di aplikasi React Pertamaku</p>

        <Card img = '/src/assets/react.svg' name = 'Halo'/>

        <div style = {styles.containerH}>
          {buah.map((buah, index) => (
            <CardBuah key={index} nama={buah}/>
          ))}
        </div>

        <CardContainer>
          <input type="text" placeholder='email' />
          <input type="password" placeholder='password' />
          <button>Kirim</button>
        </CardContainer>

        <CardContainer>
          <h1>Hello</h1>
        </CardContainer>
        
        <Footer/>
      </div>
    </>
  )
}

export default App

const styles = {
  containerH: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  }
}

/*
Aturan Penggunaan JSX
1. Hanya bisa return 1 elemen -> harus dibungkus dalam react Fragment <></>
2. Semua tag harus ditutup
3. Penggunaan camelCase untuk atribut
4. JSX harus di-return untuk dapat ditampilkan
*/