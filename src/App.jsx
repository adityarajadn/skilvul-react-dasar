import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let isLoggenIn = true
  // let name = 'raja'
  // if (isLoggenIn) {
  //   return (
  //     <div>
  //       <h1>user {name} has logged in!</h1>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div>
  //       <h1>Please log in!</h1>
  //     </div>
  //   )
  // }

  // let listBuah = ['apel', 'mangga', 'pisang', 'anggur']
  // return (
  //   <ul>
  //     {listBuah.map((buah, index) => (
  //       <li key = {buah}>{buah}</li>
  //     ))}
  //   </ul>
  // )

  let listHewan = []

  if (listHewan.length === 0) {
    return <h1>Data hewan kosong</h1>
  } else {
    return (
      <ul>
        {listHewan.map((hewan) => (
          <li key={hewan}>{hewan}</li>
        ))}
      </ul>
    )
  }
}

export default App

/*
Aturan Penggunaan JSX
1. Hanya bisa return 1 elemen -> harus dibungkus dalam react Fragment <></>
2. Semua tag harus ditutup
3. Penggunaan camelCase untuk atribut
4. JSX harus di-return untuk dapat ditampilkan
*/