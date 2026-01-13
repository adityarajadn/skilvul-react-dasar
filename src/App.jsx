import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let nama = 'raja'
  return (
    <> {/* Fragment */}
      <div>
        <h1>Hello, World!</h1>
        <h2>Selamat Datang {nama}</h2>

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas corrupti doloremque ipsum asperiores voluptatum qui illo, magni nobis, blanditiis velit, molestiae enim ullam? Corporis itaque praesentium quisquam voluptatum vel soluta?</p>
        <img src="/src/assets/react.svg" alt="react" />
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