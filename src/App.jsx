
import { Suspense, useState } from 'react'
import './App.css'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import Showitems from './components/Showitems/Showitems'

function App() {
  const [selectedCategory,setSelectedCategory] = useState('');

  const [count, setCount]= useState(1)



  const [addToCart,setAddToCart]= useState([])

  const handleAddToCart = (food)=>{

    // const exists = addToCart.find(item => item.idMeal === food.idMeal);

    // if (!exists) {

    // setAddToCart([...addToCart, food]);

    // }
    

    setAddToCart([...addToCart, {...food,customId:count}]);
    
    setCount(count + 1)

  }

  const handleRemoveToCart = (idMeal)=>{
    console.log(addToCart)
    const remainingAddToCart = addToCart.filter((removeId)=> removeId.customId !== idMeal);
    setAddToCart(remainingAddToCart);
  }
  
  

  return (
    <>

    <Navbar></Navbar>
    <Suspense fallback={<h1>Buttons Are Coming...</h1>}>
    <Items selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}></Items> 
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
