import React from 'react'
import FilterTab from '../../components/FilterTab'
import DeliveryCollection from '../tabPagesItem/DeliveryCollection'
import DeliveryListItem from '../tabPagesItem/DeliveryListItem'
import TopBrands from '../tabPagesItem/TopBrands'
import {restaurents} from '../../arrayData/restaurentListData'

function Delivery() {
    const restaurentsList = restaurents
  return (
    <div>
        <div className="max-width">
        <FilterTab/>
        </div>
        <DeliveryCollection/>
        <TopBrands/>
        <DeliveryListItem list={restaurentsList} collectionName='Delivery Restaurants in Mumbai'/>
    </div>
  )
}

export default Delivery