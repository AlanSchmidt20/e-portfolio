import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './About'
import Info from './Info'
import Interests from "./Interests"
import Footer from "./Footer"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Info />
    <App />
    <Interests />
    <Footer />
  </React.StrictMode>
)
