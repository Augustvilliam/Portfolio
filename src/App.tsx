import { Route, Routes } from 'react-router'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />

      </Route>
    </Routes>
  )
}

export default App
