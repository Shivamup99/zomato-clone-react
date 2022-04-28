import React from 'react'

function PrevArrow(props) {
    const {style,className,onClick} =props
  return (
    <div className={className} onClick={onClick}
    style={{...style, background:'#fffff',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center',padding:'4px'}}
    ></div>
  )
}

export default PrevArrow