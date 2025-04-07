import React from 'react';

const Displayitems = ({food,handleAddToCart}) => {
    
    
    const {strMeal,strMealThumb,idMeal} = food;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img 
      src={strMealThumb}
      alt=""
      className="rounded-xl w-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{strMeal}</h2>
    <div className="card-actions">
      <button onClick={()=>handleAddToCart(food)} className="btn btn-primary">Order Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Displayitems;