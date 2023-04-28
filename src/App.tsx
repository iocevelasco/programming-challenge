import React, { useEffect } from 'react'
import Header from 'ui/components/Header'
import LadingLayout from 'ui/Layouts/LadingLayout'
import Routes from 'routes'
import Footer from 'ui/components/Footer'
import { useDispatch } from 'react-redux'
import { auth, createUserProfileDocument } from './Firebase/firebase-utils'
import { onAuthStateChanged } from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'
import * as userActions from './Redux/user/user-actions'

// function onAuthStateChange(cb, action) {
//   onAuthStateChanged(auth, async (userAuth) => {
//     if (userAuth) {
//       const userRef = await createUserProfileDocument(userAuth)

//       onSnapshot(userRef, (snapShot) => cb(action({ id: snapShot.id, ...snapShot.data() })))
//     } else {
//       cb(action(null))
//     }
//   })
// }

function App() {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const unsuscribe = onAuthStateChange(dispatch, userActions.setCurrentUser)
  //   return () => unsuscribe()
  // }, [dispatch])

  return (
    <LadingLayout>
      <Routes />
    </LadingLayout>
  )
}

export default App
