import React from 'react';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HeadsetIcon from '@mui/icons-material/Headset';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Badge } from '@mui/material';



export const SidebarData = [
    {
    title: 'Downloads',
    path:'/',
    firstIcon: <AssignmentIcon />,
    cName: 'menuItemsText',
    secondIcon: <ArrowForwardIosIcon  style={{ fontSize: 16, marginLeft: 38}} />
    },
    {
    title: 'Shared Links',
    path:'/',
    firstIcon: <PeopleAltIcon />,
    cName: 'menuItemsText'
    
    },
    
    {
    title: 'Personal links',
    path:'/',
    firstIcon: <PersonIcon />,
    cName: 'menuItemsText'
    
    },
    {
    title: 'Admin groups',
    path:'/',
    firstIcon: <InsertChartIcon />,
    cName: 'menuItemsText',
    secondIcon: <ArrowForwardIosIcon  style={{ fontSize: 16, marginLeft: 20}} />,

    },
    {
    title: 'Smart Alerts',
    path:'/',
    firstIcon: <NotificationsIcon />,
    cName: 'menuItemsText',
    secondIcon: <Badge className="badge" color="primary"  style={{ marginLeft: 38}}  badgeContent={10} ></Badge>

    },
    {
    title: 'Trading Diary',
    path:'/',
    firstIcon: <InsertChartIcon />,
    cName: 'menuItemsText',
    

    },
    {
    title: 'Co-Development',
    path:'/',
    firstIcon: <CompareArrowsIcon />,
    cName: 'menuItemsText',
    

    }
    

    
]

export const SupportFeedback = [
    {
    title: 'Support',
    path:'/',
    firstIcon: <HeadsetIcon />,
    cName: 'menuItemsText',
    secondIcon: '',

    },
    {
    title: 'Feedback',
    path:'/',
    firstIcon: <FeedbackIcon />,
    cName: 'menuItemsText',
    secondIcon: ''
    }
]

