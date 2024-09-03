import React, { useEffect, useState } from 'react'
import imageLogo from '../../../../assets/imageLogo.png'
import logo from '../../../../assets/logo.png'
import './OpeningPage.style.css';

const OpeningPage = () => {

    const [opening, setOpening] = useState(true);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setOpening(false);
        }, 1000);
        return () => clearTimeout(timer);
    },[]);
  return (
    <div className={`opening-page ${opening? 'fade-in' : 'fade-out'}`}>
        <img src={imageLogo} alt='Logo' className='opening-logo' />
        <img src={logo} alt='Logo' className='opening-logo' />
    </div>
  )
}

export default OpeningPage
