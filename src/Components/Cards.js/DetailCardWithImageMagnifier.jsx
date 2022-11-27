import React from 'react'
import ImageMagnifyThumbnail from '../ImageMagnify/ImageMagnifyThumbnail'



const DetailCardWithImageMagnifier = ({url, heading, desc}) => {
  return (
    <div style={{display: "flex", alignItems: "center"}}>

        <ImageMagnifyThumbnail url={url}/>
        <div style={{paddingLeft: "10px"}}>
            <h5 style={{fontSize: "16px", fontWeight: "700", lineHeight: "18px", margin: "0px"}}>{heading}</h5>
            <p style={{margin: "0px", marginTop:"10px"}}>{desc}</p>
        </div>
        
    </div>
  )
}

export default DetailCardWithImageMagnifier