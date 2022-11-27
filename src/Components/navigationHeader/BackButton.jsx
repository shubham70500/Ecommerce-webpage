import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = ({title}) => {
  return (
    <div style={{marginLeft: "30px", marginTop: "20px", marginBottom: "10px"}}>
        <div className='back-button-custom'> <ArrowBackIosIcon className='back-button-custom-icon'/> {title}</div>
    </div>
  )
}

export default BackButton