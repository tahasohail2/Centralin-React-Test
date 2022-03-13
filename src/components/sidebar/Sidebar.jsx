import React from 'react'
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import AvatarImage from '../../assets/images/Avatar.png';
import { SidebarData, SupportFeedback, Social } from './SidebarData';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';


function Sidebar() {
  return (
   <div className="sidebarWrapper">
   
   <div className="AdminSection">
   <div className="AdminAvatar">
   <Avatar alt="Taha" src={AvatarImage}/>
   </div>
     <div className="AdminName">
       <p>Admin One</p>
     </div>
     <div className="AdminDesignation">
       <p>Centralin User</p>
     </div>
   </div>
   
   

   <div className="MenuItems">
    <ul className="MenuItemsList">
      {SidebarData.map((item,index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to = {item.path}>
              {item.firstIcon}
              <span id="title">{item.title}</span>
              {item.secondIcon}
            </Link>
          </li>
        )
      })}
    </ul>
    <hr/>
    <ul className="MenuItemsList">
      {SupportFeedback.map((item,index) => {
        return (
          <li key={index} className={item.cName}>
            <Link to = {item.path}>
              {item.firstIcon}
              <span id="title">{item.title}</span>
            </Link>
          </li>
        )
      })}
    </ul>

   <div className="Social">
      <FacebookOutlinedIcon />
      <TelegramIcon />
      <YouTubeIcon />
   </div>

   <div className="LogoutButton">
   <Button variant="contained" style={{backgroundColor: '#1CB393', textTransform: 'lowercase', borderRadius: '10px', width: '80%'}} endIcon={<LogoutIcon />}>
  Log out
</Button>
   </div>
   </div>
    
   </div>
  )
  
}

export default Sidebar