import React from 'react'
import Slider from 'react-slick'
import {topBrands} from '../../arrayData/topBrands'
import {settingsBrand} from '../tabPagesItem/carausol/settings'
function TopBrands
() {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settingsBrand}>
            {topBrands.map((brand)=>{
                return(
                    <>
                    <div className="top-brands-cover" key={brand.id}>
                        <img src={brand.img} alt={brand.time} className='brands-img'/>
                    </div>
                    </>
                )
            })}
        </Slider>

    </div>
  )
}

export default TopBrands
 