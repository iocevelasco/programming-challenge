import React from 'react'
import { AnimatePresence } from 'framer-motion'
// import * as userActions from "../../Redux/user/user-actions";
import { useDispatch, useSelector } from 'react-redux'
//import { auth } from '../../Firebase/firebase-utils'

import { HrStyled, LinkStyled, ModalContainerStyled, UsernameStyled } from './ModelUserStyles'

const ModalUser = () => {
  const { currentUser, hiddenMenu } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{`Hola ${currentUser?.displayName}`}</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/userlanding">Mi plani</LinkStyled>
          <span
          // onClick={() =>
          //   auth.signOut().then(dispatch(userActions.toggleMenuHidden()))
          // }
          >
            Cerrar Sesion
          </span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  )
}

export default ModalUser
