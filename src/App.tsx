import { Routes as ReactDomRoutes, Route } from 'react-router-dom'
import { lazy } from 'react'
import { AppContainer } from './App.style'

const WitchGamePage = lazy(() => import('ui/pages/WitchGame'))

const App = () => {
  return (
    <AppContainer>
      <ReactDomRoutes>
        <Route path="/" element={<WitchGamePage />} />
      </ReactDomRoutes>
    </AppContainer>
  )
}

export default App
