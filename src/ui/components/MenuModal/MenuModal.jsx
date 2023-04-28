import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  ModalOverlayStyled,
} from './MenuModalStyle'

import { useDispatch, useSelector } from 'react-redux'
//import * as menuActions from "../../Redux/menu/menu-actions";
import NavbarMenu from '../NavbarMenu/NavbarMenu'
const CartModal = () => {
  const hiddenCart = useSelector((state) => state.menu.hidden)
  const dispatch = useDispatch()
  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          //onClick={() => dispatch(menuActions.toggleHiddenMenu())}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: -600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: -600 }}
            transition={{ type: 'spring', damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled onClick={() => dispatch(menuActions.toggleHiddenMenu())}>
              <CloseButtonStyled className="close__modal " whileTap={{ scale: 0.95 }}>
                X
              </CloseButtonStyled>
            </CloseButtonContainerStyled>
            <NavbarMenu />
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  )
}

export default CartModal
