import React, { useContext } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ZoomInOutlinedIcon from '@mui/icons-material/ZoomInOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LightModeIcon from '@mui/icons-material/LightMode';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom';
import "./navbar.scss"
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';


function Navbar() {
    const {toggle,darkMode}=useContext(DarkModeContext)
    const {currentUser}=useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
            <span>Lamasocial</span>
            </Link>
            <HomeOutlinedIcon/>
            {darkMode?<LightModeIcon onClick={toggle}/>:<DarkModeOutlinedIcon onClick={toggle}/>}
            <GridViewOutlinedIcon/>
            <div className="search">
                <ZoomInOutlinedIcon/>
                <input type='text' placeholder='Search...'/>
            </div>

        </div>
        <div className="right">
            <PersonOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>
            <div className="user">
                <img src={currentUser.profilePic} alt=""/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar