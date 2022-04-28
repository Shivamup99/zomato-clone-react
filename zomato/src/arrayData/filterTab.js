import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBriefcaseClock, faBucket} from '@fortawesome/free-solid-svg-icons'
export const filterTabs=[
    {
        id:'1',
        icon:<FontAwesomeIcon icon={faBucket} className='absolute-center'/>,
        title:'Filter'
    },
    {
        id:'2',
        title:'Rating: 4.0'
    },
    {
        id:'3',
        title:'Safe and Hygenic'
    },
    {
        id:'4',
        title:'Pure Veg'
    },
    {
        id:'5',
        icon:<FontAwesomeIcon icon={faBriefcaseClock} className='absolute-center'/>,
        title:'Delivery Time'
    },
    {
        id:'6',
        title:'Great Offers'
    }
]