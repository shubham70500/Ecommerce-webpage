import React from 'react'
import { Button } from "@mui/material";

const RelatedProductsCard = ({imgUrl, pName, pPrice, pMrp, pDisc, pId}) => {
  return (
    <div className='card-container-related'>
        <div className='wrapper-image-related'>
        <img
            src='https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PRFASRSYT1/LF.jpg'
            srcSet='https://res.cloudinary.com/tsukuyomi/image/upload/dpr_2.0,f_auto,q_auto/v1/prd/products/web/PRFASRSYT1/LF.jpg'
            alt={pName}
            loading="lazy"
            className='image-related'
            />
        </div>
        <div style={{height: "30px"}} />

        <h3 className='related-title'>Floral Affair Study Table</h3>
        <div style={{display: "flex", justifyContent: "space-between"}}>
            <div>
                <div style={{display: "flex"}}>
                    <div className="price-discounted">
                    ₹ 1,08,999
                    </div>
                    <div className="price-mrp">
                    ₹ 1,14,856
                    </div>
                </div>
                <div className="discount-percentage org">
                    5% off
                </div>
            </div>
                <Button className="button-outline-related">
                    Add 
                </Button>
        </div>
        
    </div>
  )
}

export default RelatedProductsCard