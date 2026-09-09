import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import LabPage from './pages/LabPage'
import TutorPage from './pages/TutorPage'
import LessonsPage from './pages/LessonsPage'
import ProblemPage from './pages/ProblemPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/lab" element={<LabPage />} />
          <Route path="/tutor" element={<TutorPage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/problems" element={<ProblemPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App