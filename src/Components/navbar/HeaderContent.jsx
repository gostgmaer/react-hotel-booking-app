import React from 'react'
import Topbar from '../../Global/TopBar'
import Header from './Header/Header'
import './styles.scss'

const HeaderContent = () => {
  return (
    <div className='HeaderContent'>
        <Topbar></Topbar>
        <Header></Header>
    </div>
  )
}

export default HeaderContent