import { Route, Routes } from 'react-router'
import PageLayout from './components/layout/PageLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import JourneyPage from './pages/JourneyPage'
import FriendsPage from './pages/FriendsPage'

function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="journey" element={<JourneyPage />} />
        <Route path="friends" element={<FriendsPage />} />

      </Route>
    </Routes>
  )
}

export default App
