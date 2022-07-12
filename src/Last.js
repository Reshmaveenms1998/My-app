import { Grid, Typography } from '@mui/material'
// import { Button, Dropdown } from 'bootstrap'
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Button from '@mui/material/Button';




const Last = () => {
  return (
    <>
    <Grid className='container-fluid'>
        <Grid className='row'>
            <Grid className='col-md-12'>
                <AccessAlarmIcon/>
                <span style={{marginLeft:"20%"}}>Samantha</span>
                <ArrowDropDownIcon/>
                </Grid>
                <Grid className='col-md-12 mt-5'>
                    <span>Continue</span>
                    <ArrowLeftIcon/>
                    <ArrowRightIcon/>
                    <span style={{marginLeft:"15%"}}>See more</span>
                    <ArrowRightIcon/>
                    <Grid style={{height:"18vh",width:"60%",background:"black",color:"white",marginTop:"15%"}}>
                        <Typography>Wandavision</Typography>
                        <Typography>1 Episode left</Typography> 
                        <Button variant="standard" style={{background:"blue",color:"white"}}>Drop</Button>
                        <Button style={{background:"green",color:"white",marginLeft:"5%"}}>Watch</Button>

                    </Grid>  

                </Grid>  

                <Grid className='col-md-12 mt-5'>
                    <span>Top Rated</span>
                    <ArrowLeftIcon/>
                    <ArrowRightIcon/>
                    <span style={{marginLeft:"15%"}}>See more</span>
                    <ArrowRightIcon/>
                    <Grid style={{height:"18vh",width:"60%",background:"black",color:"white",marginTop:"15%"}}>
                        <Typography>Super Natural</Typography>
                         <Button variant="standard" style={{background:"blue",color:"white",marginTop:"10%"}}>+</Button>
                        <Button style={{background:"green",color:"white",marginLeft:"5%",marginTop:"10%"}}>Watch</Button>

                    </Grid>  

                </Grid>  

                <Grid className='col-md-12 mt-5'>   
                    <span>Genres</span>
                    <ArrowLeftIcon/>
                    <ArrowRightIcon/>
                    <span style={{marginLeft:"15%"}}>See more</span>
                    <ArrowRightIcon/>
                    <Grid style={{height:"18vh",width:"60%",background:"black",color:"white",marginTop:"15%"}}>
                        <Typography>Drama</Typography>
                         <Button variant="standard" style={{background:"blue",color:"white",marginTop:"10%"}}>+</Button>
                        <Button style={{background:"green",color:"white",marginLeft:"5%",marginTop:"10%"}}>Watch</Button>

                    </Grid>  
                                 
                </Grid>  

        </Grid>

    </Grid>
    </>
  )
}

export default Last