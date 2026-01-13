import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Kucing from './components/Kucing.jsx'
import Counter from './components/Counter.jsx'
import Login from './components/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Kucing /> */}
    {/* <Counter /> */}
    <Login />
  </StrictMode>,
)
