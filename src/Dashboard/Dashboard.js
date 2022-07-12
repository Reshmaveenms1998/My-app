import { Grid, Link, ListItem, ListItemIcon, responsiveFontSizes, Typography } from '@mui/material'
import React from 'react'
import {Menu,Library, Genaral} from './Files'

const Dashboard = () => {

  return (
    <>
    <Grid className="container-fluid">
     <Grid className="row">
        <Grid className="col-md-12">           
     <Typography>Menu</Typography>
     {Menu.map((resp)=>(
        <>
        <ListItem>
            <ListItemIcon>
                {resp.icon}
            </ListItemIcon>
            <Link>
            {resp.name}
            </Link>
        </ListItem>
        </>
     ))}
     <Typography>Library</Typography>
     {Library.map((resp)=>(
        <>
        <ListItem>
            <ListItemIcon>
                {resp.icon}
            </ListItemIcon>
            <Link>
            {resp.name}
            </Link>
        </ListItem>
        </>
     ))}
     <Typography>Genaral</Typography>
     {Genaral.map((resp)=>(
        <>
        <ListItem>
            <ListItemIcon>
                {resp.icon}
            </ListItemIcon>
            <Link>
            {resp.name}
            </Link>
        </ListItem>
        </>
     ))}
        </Grid>

     </Grid>
    </Grid>
    </>
  )
}

export default Dashboard