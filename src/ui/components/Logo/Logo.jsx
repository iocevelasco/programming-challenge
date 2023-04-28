import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import logo from 'assets/images/logo.png'

export const LogoImg = styled(motion.img)`
  width: 8rem;
  border-radius: 0.4rem;
  /* box-shadow: 2px 4px 8px 2px var(--blanco); */
  /* opacity: 50%; */
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 624px) {
  }
`
const Logo = () => {
  return <LogoImg src={logo} alt="logo" whileTap={{ scale: 0.95 }} />
}

export default Logo
