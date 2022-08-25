import { HashRouter as Router, Route, Routes } from 'react-router-dom'

import './assets/scss/global.scss'
import { Header } from './cmps/Header'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { ContactDetails } from './pages/ContactDetails'
import { ContactEdit } from './pages/ContactEdit'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <Router>
      <div className="main-app">
        <Header />
        <Routes>
          <Route path="/contact/edit/:id" element={<ContactEdit />} />
          <Route path="/contact/edit/" element={<ContactEdit />} />
          <Route path="/contact/:id" element={<ContactDetails />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
