import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { OrderList } from '../data/OrderList'
import { useCart } from '../content/CartContext'
import SideBar from '../pages/SideBar'

const OrderDetail = () => {
  const [data, setData] = useState({});
  const{each} = useParams();
  const { addToCart } = useCart();

useEffect(()=>{
  const order = OrderList.find(item=> item.id===parseInt(each));
  if(order){
    setData(order);
  }
}, [each]);
const handleAddToCart = () =>{
  if(data && data.id){
    addToCart(data);
  }
  
}
  return (
      <div className="max-w-3xl p-6 mx-auto bg-white rounded shadow">
        
  {data.Image && (
    <img
      src={data.Image}
      alt={data.title}
      className="object-cover w-full h-64 mb-4 rounded"
    />
  )}
  <h2 className="mb-2 text-2xl font-bold">{data.title}</h2>
  <p className="mb-2 text-lg text-gray-600">{data.price}</p>
  <p className="mb-4 text-gray-700">{data.description}</p>

  <button onClick={handleAddToCart} className="items-center px-4 py-2 text-center text-white bg-red-500 rounded hover:bg-red-600">
    {data.button || 'Add to cart'}
  </button>
 <SideBar/>
</div>





  )
}

export default OrderDetail

