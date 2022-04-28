import React from 'react'
import {tabs} from '../arrayData/tabOption'


function TabOption({activePage,setActivePage}) {
  return (
    <>
    <div className="tab-options">
        <div className="max-width options-wrper">
            {
                tabs.map((tab,index)=>{
                    return (
                        <div key={index} onClick={()=>setActivePage(tab.name)}
                        className={`tab-item absolute-center ${activePage===tab.name &&'active-tab'}`}
                        >
                        <div className='tab-img-container absolute-center' 
                        style={{backgroundColor:`${activePage===tab.name ? tab.backdrop:''}`}}
                        >
                        <img className='tab-img' alt={tab.name}
                        src={activePage===tab.name ? tab.active_img:tab.inactive_img}
                        />
                   </div>
                   <div className="tab-name">{tab.name}</div>
                   </div>
                )})
            }
        </div>
    </div>
    </>
  )
}

export default TabOption