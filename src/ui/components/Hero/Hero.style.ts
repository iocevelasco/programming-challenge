import styled from 'styled-components'
import { motion } from 'framer-motion'
export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: space-around;
  background: url(https://res.cloudinary.com/dpxe6utid/image/upload/v1677773937/suyai%20assets/header_gpksh3.jpg)
    center center;
  background-size: cover;
  position: relative;
  top: -1rem;
`

export const HeroImg = styled.img``

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const HeroTitle = styled.h2`
  font-size: 4rem;
  text-align: center;
`

export const HeroButton = styled(motion.button)`
  width: 80%;
  height: 3rem;
  background-color: var(--naranjasuyai);
  border: none;
  border-radius: 0.8rem;
  font-size: 1.5rem;
  font-weight: 500;
  box-shadow: 2px 2px 6px 1px var(--negroheader);
  cursor: pointer;

  @media only screen and (max-width: 624px) {
    font-size: 1rem;
  }
`
