import * as React from 'react';
import "./Topbar.css"
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarImage from '../../assets/images/Avatar.png';
const currencies = [
    {
      value: 'English',
      label: 'English',
    },
    {
      value: 'Chinese',
      label: 'Chinese',
    },
    {
      value: 'Urdu',
      label: 'Urdu',
    },
    {
      value: 'French',
      label: 'French',
    },
  ];




export default function Topbar() {
    const [language, setLanguage] = React.useState('English');

    const handleChange = (event) => {
      setLanguage(event.target.value);
    };
   
  return (
    <div className="topbar">
<div className="topbarWrapper">
<div className="topLeft">

<h1>Welcome to Centralin!</h1>
    
        

    
</div>
<div className="topRight">
<p>Training Mode</p>
        <Switch  defaultChecked />
        <TextField
          select
          label="Language"
          value={language}
          onChange={handleChange}
          
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
    
    <IconButton>
        <NotificationsIcon />
        </IconButton>
        <IconButton>
        <SettingsIcon />
        </IconButton>
        <Avatar alt="Taha" src={AvatarImage}/>
        
   
</div>
</div>
<hr/>
    </div>
    
  )
}
