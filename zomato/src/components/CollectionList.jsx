import React from 'react'
import Slider from 'react-slick'
import { settings } from '../pages/tabPagesItem/carausol/settings'

function CollectionList({list}) {
  return (
    <div className='collection-wrapper'>
        <div className="max-width collection">
          <div className="collection-title">Collections</div>
          <div className="collection-subtitle-row">
              <div className="collection-subtitle-text">
              Explore curated lists of top restaurants, cafes, pubs, and bars in Mumbai, based on trends
              </div>
              <div className="collection-location">
                  All Collection in Mumbai
              </div>
          </div>
          <Slider {...settings}>
            {list.map((item)=>{
                return(
                    <>
                    <div className="collection-cover">
                        <img src={item.img} className='collection-cover-img' alt={item.title}/>
                    <div className="gradient-bg"></div>
                    <div className='collection-card-title'>{item.title}</div>
                    <div className="collection-card-subtitle">
                        <div>{item.places}</div> 
                    </div>
                    </div>
                    </>
                )
            })}
        </Slider>
        </div>
    </div>
  )
}

export default CollectionList