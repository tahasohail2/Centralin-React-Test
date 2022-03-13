import React from 'react'
import './Profile.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
    const [value, setValue] = React.useState(1);

const handleChange = (event, newValue) => {
  setValue(newValue);
};

function createData(date, time, ip, change, action) {
  return { date, time, ip, change, action };
}
const rows = [
  createData('22-02-2022', '10:00 PM', '192.162.20.22', 'Success at first attempt', 'Login'),
  createData('22-02-2022', '08:32 AM', '192.162.20.22', 'Success at first attempt', 'Login'),
  createData('22-02-2022', '09:23 PM', '192.162.20.22', 'Success at first attempt', 'Login'),
  
];
    
  return (
    <>
    <div className="profileHeading">
            <h1>Profile</h1>
        </div>
    <div className="mainWrapper">
        

        <div className="mainContent">
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab style={{textTransform: 'capitalize'}} label="Personal Information" {...a11yProps(0)} />
          <Tab style={{textTransform: 'capitalize'}} label="Sign In & Security" {...a11yProps(1)} />
          <Tab style={{textTransform: 'capitalize'}} label="Connect & View Social Media Information" {...a11yProps(2)} />
          <Tab style={{textTransform: 'capitalize'}} label="Personalization" {...a11yProps(3)} />
          <Tab style={{textTransform: 'capitalize'}} label="Centralin Points" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      Personal Information
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="signInSection">
          <div className="heading">
              <h2 id="signIn">Sign In</h2>
          </div>
          <div className="signInFields">
          <TextField
          className="TextField-without-border-radius"
          label="Email Address"
          defaultValue="dummy@email.com"
        />
         <TextField style={{marginTop: '20px'}}
         className="TextField-without-border-radius"
          label="Confirm Email Address"
          defaultValue="dummy@email.com"
        />
          
          


        
          </div>
      </div><br/><br/>
      <hr/>
      <br/><br/>
      <div className="signInSection">
          <div className="heading">
              <h2>Security Information</h2>
          </div>
          <div className="signInFields">
          <TextField
          className="TextField-without-border-radius"
          label="Old Password"
          type="password"
          autoComplete="current-password"
          defaultValue="••••••••••••"
        />
         <TextField style={{marginTop: '20px'}}
         className="TextField-without-border-radius"
          label="New Password"
          defaultValue="••••••••••••"
        />
        <TextField style={{marginTop: '20px'}}
        secureTextEntry={true}
         className="TextField-without-border-radius"
          label="Confirm New Password"
          type="password"
          autoComplete="current-password"
          defaultValue="••••••••••••"
        />
          
          


        
          </div>
          <div className="edit">
            <div className="editOldPassword">
            <Button style={{textTransform: 'capitalize', color:'#5048E5', fontWeight:'bold'}} variant="text">Edit</Button>
            </div>
            <div className="editNewPassword">
            <Button style={{textTransform: 'capitalize', color:'#5048E5', fontWeight:'bold'}} variant="text">Edit</Button>
            </div>
            <div className="confirmNewPassword">
            <Button style={{textTransform: 'capitalize', color:'#5048E5', fontWeight:'bold'}} variant="text">Edit</Button>
            </div>
          </div>

          <div>
            
          </div>

          

      </div>
      <div className="accountActivity">
      <div className="heading">
              <h2>Account Activity</h2>
          </div>
      <div className="tableContent">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 820 }} aria-label="simple table">
        <TableHead style={{backgroundColor: '#F3F4F6'}}>
          <TableRow>
            <TableCell style={{fontSize:'12px', fontWeight:'bold'}}>DATE</TableCell>
            <TableCell style={{fontSize:'12px', fontWeight:'bold'}} align="right">TIME</TableCell>
            <TableCell style={{fontSize:'12px', fontWeight:'bold'}} align="right">IP ADDRESS</TableCell>
            <TableCell style={{fontSize:'12px', fontWeight:'bold'}} align="right">CHANGE MADE</TableCell>
            <TableCell style={{fontSize:'12px', fontWeight:'bold'}} align="right">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell style={{color:'#1D84C6'}} align="right">{row.time}</TableCell>
              <TableCell align="right">{row.ip}</TableCell>
              <TableCell style={{color:'#1CB393'}} align="right">{row.change}</TableCell>
              <TableCell style={{color:'#1D84C6'}} align="right"><Button>{row.action}</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
      </div>
      
      
      </TabPanel>
      <TabPanel value={value} index={2}>
      Connect & View Social Media Information
      </TabPanel>
      <TabPanel value={value} index={3}>
      Personalization
      </TabPanel>
      <TabPanel value={value} index={4}>
      Centralin Points
      </TabPanel>
    </Box>
        </div>
    </div>
    
    </>
  )
}

