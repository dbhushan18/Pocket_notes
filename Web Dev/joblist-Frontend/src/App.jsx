import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import RegisterPage from './Pages/RegisterPage'
import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import CreateJob from './Pages/CreateJob'
import JobDetailsPage from './Pages/JobDetailsPage'
import JobPost from './Pages/JobPost'
import ProtectedRoute from './Components/Protected Route/ProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage key="home" />} />
          <Route path="/register" element={<RegisterPage key="register" />} />
          <Route
            path="/login"
            element={<LoginPage/>}
          />
          <Route path='/addJob' key="addJob" element={<ProtectedRoute Component={CreateJob} />} />
          <Route path='/job-details/:id' key="details" element={<JobDetailsPage />} />
          <Route path='/job-post' key="job-post" element={<ProtectedRoute Component={JobPost} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
