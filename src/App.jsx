
import { Suspense, useState } from 'react'
import './App.css'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import Showitems from './components/Showitems/Showitems'

function App() {
  const [selectedCategory,setSelectedCategory] = useState('');

  const [addToCart,setAddToCart]= useState([])

  const handleAddToCart = (food)=>{

   setAddToCart([...addToCart,food]);

  }

  const handleRemoveToCart = (idMeal)=>{
    const remainingAddToCart = addToCart.filter((removeId)=> removeId.idMeal !== idMeal);
    setAddToCart(remainingAddToCart);
  }
  
  

  return (
    <>

    <Navbar></Navbar>
    <Suspense fallback={<h1>Btn Are Coming...</h1>}>
    <Items setSelectedCategory={setSelectedCategory}></Items> 
    </Suspense>
    
      <Suspense fallback={<h1>Foods items Loading...</h1>}>
      <Showitems  
      handleRemoveToCart={handleRemoveToCart}
      addToCart={addToCart} 
      handleAddToCart={handleAddToCart} 
      selectedCategory={selectedCategory}></Showitems>
      </Suspense>
    </>
  )
}

export default App
