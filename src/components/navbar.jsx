import React from 'react'
import sample from "../assets/sampleimg.jpg";
import "./navbar.css"
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navheading'>
        <h1 className='heading'> <SettingsOutlinedIcon /> &nbsp; Dashboard </h1>
      </div>
      <div className='navsetting'>
        <div>
           <p className='navcontent dashboard'> <DashboardOutlinedIcon /> &nbsp; &nbsp; Dashboard </p>
           <p className='navcontent'> <CategoryOutlinedIcon /> &nbsp; &nbsp;  Product <span> <ChevronRightOutlinedIcon />  </span> </p>
           <p className='navcontent'> <PersonOutlineOutlinedIcon /> &nbsp; &nbsp;  Customer <span> <ChevronRightOutlinedIcon />  </span> </p>
           <p className='navcontent'> <WalletOutlinedIcon /> &nbsp; &nbsp;  Income <span> <ChevronRightOutlinedIcon />  </span> </p>
           <p className='navcontent'> <LocalOfferOutlinedIcon /> &nbsp; &nbsp;  Promote <span> <ChevronRightOutlinedIcon />  </span> </p>
           <p className='navcontent'> <HelpCenterOutlinedIcon /> &nbsp; &nbsp;  Help <span> <ChevronRightOutlinedIcon />  </span> </p>
        </div>
          <div className='profile'>
            <img className='profileimg' src={sample} alt='profile'></img>
            <p className='profilename'>Siddarth <br /> <span> Project Manager </span> </p>
            <p className='arrow'> <KeyboardArrowDownOutlinedIcon /> </p>  
          </div>
          </div>
      </div>
  )
}

export default Navbar;
