import React from 'react'
import { filterTabs } from '../arrayData/filterTab'
import FilterItems from '../components/FilterItems'
function FilterTab() {
  return (
    <div className='filters'>
        {filterTabs && filterTabs.map((filter,index)=>{
            return(
                <FilterItems filter={filter} key={filter.id}/>
            )
        })}
    </div>
  )
}

export default FilterTab