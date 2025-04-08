import React, { useEffect, useState } from 'react';

const Items = ({setSelectedCategory,selectedCategory}) => {
    const [categories, setCategories] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(res=>res.json())
        .then(data=>setCategories(data.categories))
    },[])
    return (
        <div className='md:container mx-auto'>
            <h1 className='text-3xl bg-gray-300 text-center p-3 mt-10 rounded-2xl'>My Items</h1>
            <div className='flex gap-4 justify-between mt-10'>
            {
                categories.map((category)=><button className={`btn btn-outline btn-primary ${selectedCategory === category.strCategory && 'btn btn-active btn-primary'}`} onClick={()=>setSelectedCategory(category.strCategory)}  key={category.idCategory} >{category.strCategory}</button>)
            }
            </div>
        </div>
    );
};

export default Items;