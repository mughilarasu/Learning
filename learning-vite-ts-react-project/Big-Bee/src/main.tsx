import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { CartProvider } from './context/CartProvider'
import { ArtistProvider } from './context/ArtistProvider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ArtistProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ArtistProvider>
  </React.StrictMode>,
)