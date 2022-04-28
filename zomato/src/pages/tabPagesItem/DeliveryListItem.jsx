import React from 'react'
import CardsData from './CardsData'

function DeliveryListItem({list , collectionName}) {
  return (
    <div className='max-width explore-section'>
        <div className="collection-title">{collectionName}</div>
        <div className="explore-grid">
        {list.map((data,index)=>{
            return <div key={index}>
                <CardsData cardDatas={data}/>
            </div>
            
        })}
        </div>
    </div>
  )
}

export default DeliveryListItem