import React from 'react'
import {collectionData} from '../arrayData/collectionData'
import { restaurents } from '../arrayData/restaurentListData'
import DeliveryListItem from '../pages/tabPagesItem/DeliveryListItem'
import CollectionList from './CollectionList'
import FilterTab from './FilterTab'
function Collections() {
    const restaurentsList = restaurents
  return (
    <>
    <CollectionList list={collectionData}/>
    <div className="max-width">
    <FilterTab />
    <DeliveryListItem list={restaurentsList} collectionName='Delivery Restaurants in Mumbai'/>
    </div>
    
    </>
  )
}

export default Collections