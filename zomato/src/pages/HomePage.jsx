import React,{useState} from 'react'
import Header from '../components/Header'
import TabOption from '../components/TabOption'
import Delivery from './tabPages/Delivery'
import DiningOut from './tabPages/DiningOut'
import NightLife from './tabPages/NightLife'
//import Footer from '../components/Footer'
function HomePage() {
    const [activePage,setActivePage] = useState('Delivery')
    const getActivatedPage =(tab)=>{
        switch(tab){
           case 'Delivery':
               return <Delivery/>;
           case 'DiningOut':
               return <DiningOut/>;
           case 'NightLife':
               return <NightLife/>;
           default:
               return <Delivery/>
        }
     }
  return (
    <div>
        <Header/>
        <TabOption activePage={activePage} setActivePage={setActivePage}/>
        {getActivatedPage(activePage)}
        {/* <Footer/> */}
       
    </div>
  )
}

export default HomePage