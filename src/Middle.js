import { Grid } from '@mui/material'
import React from 'react'
import './App.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';



const Middle = () => {
  return (
    <>
    <Grid className='container-fluid'>
        <Grid className='row'>
            <Grid className='col-md-12'>
                <ul>
                    <li>MOVIES</li>
                    <li>TVSHOWS</li>
                    <li>ANIME</li>
                    <li>
                    <form className="form-inline ml-auto">
                                <Grid className='form-group'>
                                <input className="form-control" type="search" placeholder="Search"/>
                                </Grid>
                                <Grid>
                                 <button className="btn btn-primary ml-1">Search</button> 
                                </Grid>
                             </form>

                    </li>
                    
                </ul>

            </Grid>
            <Grid className='col-md-12' style={{height:"30vh",width:"100%",background:"lightgreen"}}>
             <Grid className='row'>
              <Grid className='col-md-12'>
              
                <h2 style={{color:"white",boxShadow:"20px"}}>THE CROWN</h2>
                 </Grid>
                 <Grid className='col-md-12' style={{position:'absolute',color:"black"}}>
                  <ArrowLeftIcon style={{color:"white"}}/>                  
                  <ArrowRightIcon style={{marginLeft:"90%",height:"5vh",color:"white"}}/>
               </Grid>
               <Grid className='col-md-12'>            
                <Button className='mt-4' startIcon={<AddBoxIcon/>} style={{background:"white"}}>watchlist</Button>
                <Button className='' style={{background:"green",marginLeft:"80%",color:"white",marginTop:"-5%"}}>watchnow</Button>


               </Grid> 

             </Grid>
             <Grid className='mt-5'>
             <h2>Popular on Tiny Moviez</h2>
              </Grid>
             <Grid className='row'>
              <Grid className='card' style={{width:'18rem',marginLeft:'3%'}}>
                 <Grid className='card-body'>
                  <h5 className='card-title'>LOKI</h5>
                  <h6>********</h6>  
                 <Grid style={{marginTop:"40%"}}>
                  <span>6 Ep</span>
                  <span style={{marginLeft:"45%"}}>Super hero</span>
                  <Grid>
                    <Button style={{background:"white"}}>+</Button>
                    <Button style={{background:"green",color:"white",marginLeft:"35%"}}>watch</Button>
                 </Grid>
                </Grid>
                </Grid>
                </Grid>
                
                <Grid className='card' style={{width:'18rem',marginLeft:'3%'}}>
                 <Grid className='card-body'>
                  <h5 className='card-title'>Chernobyl</h5>
                  <h6>********</h6>
                 <Grid style={{marginTop:"40%"}}>
                  <span>5 Ep</span>
                  <span style={{marginLeft:"45%"}}>Mini Series</span>
                  <Grid>
                    <Button style={{background:"white"}}>+</Button>
                    <Button style={{background:"green",color:"white",marginLeft:"35%"}}>watch</Button>
                 </Grid>
                </Grid>
                </Grid>
                </Grid>
             </Grid>
            </Grid>

            

        </Grid>
        {/* //The Crown Data */}
       
    </Grid>
    </>
  )
}

export default Middle