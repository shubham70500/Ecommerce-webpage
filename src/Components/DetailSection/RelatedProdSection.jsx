import React from 'react'
import RelatedProductsSlider from '../Carousel/RelatedProductsSlider'

const RelatedProdSection = ({title, subtitle}) => {
  return (
    <div className='related-prod-section'>
        <div className="discount-percentage org"  style={{textAlign: "center", marginBottom: "-30px"}}>
          {subtitle}
        </div>
        <h2 className='main-heading' style={{textAlign: "center"}}>{title}</h2>
        <div style={{height: "20px"}}></div>

        <RelatedProductsSlider />
        
    </div>
  )
}

export default RelatedProdSection