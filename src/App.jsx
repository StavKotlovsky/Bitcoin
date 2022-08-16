import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/global.scss'
import { Header } from './cmps/Header'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { ContactDetails } from './pages/ContactDetails'
import { ContactEdit } from './pages/ContactEdit'

function App() {
  return (
    <Router>
      <div className="main-app">
        <Header />
        <Switch>
          <Route path="/contact/edit/:id?" component={ContactEdit} />
          <Route path="/contact/:id" component={ContactDetails} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
