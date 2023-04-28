import React from 'react'
import { HeaderWrapper, DisplayONOFF, HeeaderInfo, Info } from './HeaderStyle'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import MenuModal from '../MenuModal/MenuModal'
import { RiMenuUnfoldFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
// import * as menuActions from "../../Redux/menu/menu-actions";
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  const dispatch = useDispatch()
  return (
    <HeaderWrapper>
      <Navbar />
      <motion.div whileTap={{ scale: 0.92 }}>
        <DisplayONOFF>
          <RiMenuUnfoldFill
            // onClick={() => dispatch(menuActions.toggleHiddenMenu())}
            style={{ color: 'white', fontSize: '2rem', cursor: 'pointer' }}
          />
        </DisplayONOFF>
      </motion.div>
      <MenuModal />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Link to="/">
          <Logo />
        </Link>
        <HeeaderInfo>
          <Info>Av. Los Incas 5033</Info>
        </HeeaderInfo>
      </div>
    </HeaderWrapper>
  )
}

export default Header
