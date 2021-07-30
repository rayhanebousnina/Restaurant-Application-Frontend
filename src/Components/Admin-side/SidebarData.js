import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import ViewListIcon from '@material-ui/icons/ViewList';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';



const SidebarData = () => [
    {
        title: "home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "dishes",
        icon: <FastfoodIcon/>,
        link: "/dishes"
    },
    {
        title: "orders",
        icon: <ViewListIcon/>,
        link: "/orders"
    },
    {
        title: "customers",
        icon: <PeopleAltIcon/>,
        link: "/customers"
    }
]

export default SidebarData