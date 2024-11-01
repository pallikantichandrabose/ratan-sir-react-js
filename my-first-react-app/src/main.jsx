import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
//import { Books } from './Books.jsx'
//import { Omnivores } from './Omnivores.jsx'
import { Cart } from './Cart.jsx'
//import { Friends } from './Friends.jsx'
//import { Product } from './Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cart />
  </StrictMode>,
)
