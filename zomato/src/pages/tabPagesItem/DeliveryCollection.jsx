import React from 'react'
import {deliveryItems} from '../../arrayData/deliveryItem'
import Slider from 'react-slick'
import {settings} from '../tabPagesItem/carausol/settings'
import DeliveryItem from './DeliveryItem'
function DeliveryCollection() {
    console.log(deliveryItems)
  return (
    <div className='delivery-collection'>
        <div className="max-width">
            <div className="collection-title">Eat what makes you happy</div>
            <Slider {...settings}>
                {deliveryItems.map((item,index)=>{
                    return(
                        <div key={index}><DeliveryItem item={item}/></div>
                    )
                })}
            </Slider>
        </div>
    </div>
  )
}

export default DeliveryCollection