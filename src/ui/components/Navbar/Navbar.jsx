import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  NavbarWrapper,
  UserNavStyled,
  UserContainerStyled,
  SpanStyled,
  UserImageStyled,
} from './NavbarStyle'
import { motion } from 'framer-motion'
import { FaUserAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
// import * as userActions from "../../Redux/user/user-actions";
import ModalUser from '../ModalUser/ModalUser'
const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <NavbarWrapper>
      <ModalUser />
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: '1.2rem' }} to="./">
          Home
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: '1.2rem' }} to="./contact">
          Contacto
        </Link>
      </motion.div>
      <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: '1.2rem' }} to="./benchmarks">
          Benchmarks
        </Link>
      </motion.div>
      {/* <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./userlanding">
          PlaniWeb
        </Link>
      </motion.div> */}
      {/* <motion.div whileTap={{ scale: 0.92 }}>
        <Link style={{ fontSize: "1.2rem" }} to="./login">
          Turnos Web
        </Link>
      </motion.div> */}
      <motion.div whileTap={{ scale: 0.92 }}>
        <UserNavStyled>
          <UserContainerStyled
          // onClick={() =>
          //   currentUser
          //     ? dispatch(userActions.toggleMenuHidden())
          //     : navigate("/login")
          // }
          >
            <SpanStyled>{currentUser ? `${currentUser.displayName}` : 'Inicia Sesión'}</SpanStyled>
            {currentUser?.photoURL ? (
              <UserImageStyled src={currentUser.photoURL} alt="foto" />
            ) : (
              <FaUserAlt />
            )}
          </UserContainerStyled>
        </UserNavStyled>
      </motion.div>
    </NavbarWrapper>
  )
}

export default Navbar
