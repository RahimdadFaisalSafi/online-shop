import { useState } from 'react'
import Header from './components/Header'
import Product from './components/Product';


function App() {
  const products = [
    { id: 1, name: "Nike Air Max", price: 120, available: true, image: "src/assets/NikeAirMax.webp"},
    { id: 2, name: "Adidas UltraBoost", price: 180, available: false, image: "src/assets/AdidasUltraBoost.webp" },
    { id: 3, name: "Puma RS-X", price: 110, available: true, image: "/src/assets/PumaRS-X.jpg"},
    { id: 4, name: "New Balance 574", price: 100, available: true, image: "src/assets/NewBalance574.webp" },
  ];

  return (
    <div>
      <Header />
      <main className='container mx-auto px-4 py-8'>
        <h2 className='text-3xl font-semibold mb-8'>Featured Products</h2>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <Product key={product.key} product={product} />
          ))}
        </div>
      </main>
      
    </div>
  )
}

export default App
