import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <>
      <div>
        <h1>Hello World!</h1>
        <p>Selamat Datang di aplikasi React Pertamaku</p>

        <Card/>
        <Footer/>
      </div>
    </>
  )
}

export default App

/*
Aturan Penggunaan JSX
1. Hanya bisa return 1 elemen -> harus dibungkus dalam react Fragment <></>
2. Semua tag harus ditutup
3. Penggunaan camelCase untuk atribut
4. JSX harus di-return untuk dapat ditampilkan
*/