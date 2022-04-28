import React from 'react'

function DeliveryItem({item}) {
  return (
      <>
      <div className='delivery-item'>
        <img src={item.img} alt={item.id} className='delivery-item-img'/>
    </div>
    <div className="delivery-item-title">{item.title}</div>
      </>
    
  )
}

export default DeliveryItem