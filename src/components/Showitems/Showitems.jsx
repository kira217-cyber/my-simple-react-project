import React, { use, useEffect, useState } from 'react';
import Displayitems from '../Displayitems/Displayitems';
import { MdCancel } from "react-icons/md";

const Showitems = ({selectedCategory,handleAddToCart,addToCart,handleRemoveToCart}) => {
    const [foods,setFoods] = useState([])
    
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
  .then(res=>res.json())
  .then(data=>setFoods(data.meals))

    },[selectedCategory])
    
    return (
        <div className='md:container mx-auto mt-10'>
            {
                !selectedCategory && <h1 className='text-center text-4xl font-bold'>Please Selected One Category</h1>
            }
            
            <div className='flex gap-8 mt-10'>
            <div className='grid grid-cols-3 gap-4 w-3/4'>
            {
                foods?.map((food)=><Displayitems handleAddToCart={handleAddToCart} food={food}></Displayitems>)
            }
            </div>
            {
                selectedCategory && (<div className='w-1/4 bg-gray-300 p-4 rounded-xl'>
                    <h1 className='text-center text-2xl font-bold bg-red-300 p-3 rounded-2xl' >Add To Cart Items</h1>
                    <h2 className='text-center text-xl font-bold bg-green-300 p-3 rounded-2xl mt-4'>Add To : {addToCart.length}</h2>
                    {
                        addToCart.map((cart)=><p className='p-2 bg-amber-100 text-center mt-4 rounded-xl flex justify-between items-center'>{cart.strMeal}<button onClick={()=>handleRemoveToCart(cart.customId)} className='items-center justify-center hover:cursor-pointer'><MdCancel size={20}/></button></p>)
                    }
                    
                </div>)
            }
            </div>
        </div>
    );
};

export default Showitems;