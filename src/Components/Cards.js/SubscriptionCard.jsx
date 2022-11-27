import { Box, Grid } from '@mui/material'
import React from 'react'
import ScheduleVisitForm from '../Forms/ScheduleVisitForm'

const SubscriptionCard = () => {
  return (
    <div className='filled-card-light'>
        <Box>
        <Grid container spacing={0}>
            <Grid md={6}>
                <h2 className='title-card no-m-p' >Need a better Look?</h2>
                <p className="check-delivery-title no-m-p" >Visit our Experience Centre</p>
                <div style={{height: "40px"}}></div>
                <p className='desc-custom mr-20per'>Prava, 1st Floor, Krishna Annex, near Silk Board Junction, Sector 6, HSR Layout, Bengaluru, Karnataka 560068</p>
            </Grid>
            <Grid md={6}>
                <ScheduleVisitForm />
            </Grid>
        </Grid>
        </Box>
        
       
    </div>
  )
}

export default SubscriptionCard