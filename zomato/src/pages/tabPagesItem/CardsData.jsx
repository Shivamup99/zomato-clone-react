import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function CardsData({cardDatas}) {
    const name = cardDatas?.info?.name ?? "";
    const coverImg = cardDatas?.info?.image?.url ?? '';
    const deliveryTime = cardDatas?.order?.deliveryTime;
    const rating  = cardDatas?.info?.rating?.rating_text;
    console.log(rating)
    const approxPrice = cardDatas?.info?.cfo?.text;
    const offers = cardDatas?.bulkOffers ?? [];
    const cuisines = cardDatas?.info?.cuisine?.map((item)=>item.name).slice(0,3);
    const bottomContainers = cardDatas?.bottomContainers;
    const goldOff = cardDatas?.gold?.text;
    const proOff = offers.length>1 ? offers[0].text:null;
    const discount = offers.length>1 ? offers[1].text:offers.length===1?offers[0].text:null
  return (
    <div className='explore-card'>
    <div className="explore-card-cover">
        <img src={coverImg} alt={name} className='explore-card-img'/>
        <div className="delivery-time">{deliveryTime}</div>
        {proOff && <div className='pro-off'>{proOff}</div>}
        {goldOff && <div className='gold-off absolute-center'>{goldOff}</div>}
        {discount && <div className='discount absolute-center'>{discount}</div>}
    </div>
    <div className="res-row">
        <div className="res-name">{name}</div>
        {rating && <div className='res-rating absolute-center'>{rating}
        <FontAwesomeIcon icon={faStar} className='absolute-center star'/>
        </div>}
    </div>
    <div className="res-row">
        {cuisines.length && <div className='res-cuisines'>
            {cuisines.map((item,index)=>(
                <span key={index} className='res-cuisines-tag'>{item}{index!==cuisines.length-1 &&','}</span>
            ))}
            </div>
        }
        {approxPrice && <div className='approx-price'>{approxPrice}</div>}
    </div>
    {bottomContainers.length>0 && <div>
        <div className="card-seprator">
            <div className="explore-bottom">
                <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0]?.text}
                className='bottom-container-img' style={{height:'18px',marginTop:'5px'}}
                />
                <div className="res-bottom-text">{bottomContainers[0]?.text}</div>
            </div>
        </div>
        </div>}
    </div>
  )
}

export default CardsData