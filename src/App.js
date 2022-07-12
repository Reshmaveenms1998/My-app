import logo from './logo.svg';
import './App.css'
import { Grid } from '@mui/material';
import Dashboard from './Dashboard/Dashboard';
import Middle from './Middle';
import Last from './Last';


function App() {
  return (
   <>
   <Grid className='container-fluid'>
    <Grid className='row'>
      <Grid className='col-md-3' style={{background:"lightgray"}}>
        <h4>Dashboard</h4>
       <Dashboard/>
      </Grid>
      <Grid className='col-md-6'>
        <Middle/>
        </Grid>
        <Grid className='col-md-3'>
          <Last/>
          </Grid> 
    </Grid>
    
   </Grid>
   </> 
  )
}

export default App;
