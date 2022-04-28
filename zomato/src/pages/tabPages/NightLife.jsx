import React from 'react'
import { restaurents } from '../../arrayData/restaurentListData'
import FilterTab from '../../components/FilterTab'
import DeliveryListItem from '../tabPagesItem/DeliveryListItem';

function NightLife() {
  const restaurentsList = restaurents;
  return (
    <div className='max-width'>
      <FilterTab />
      <DeliveryListItem list={restaurentsList} collectionName='Delivery Restaurants in Mumbai'/>
    </div>
  )
}

export default NightLife