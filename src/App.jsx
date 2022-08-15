import './assets/scss/global.scss'
import { Header } from './cmps/Header'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'

import { Component } from 'react'

export default class App extends Component {
  state = {
    selectedPage: false,
    // page: 'home',
  }
  // onSetPage = (page) => {
  //   this.setState({ page })
  // }

  onSelectedPage = () => {
    this.setState((prevState) => ({ selectedPage: !prevState.selectedPage }))
  }

  render() {
    const { selectedPage } = this.state
    return (
      <div className="main-app">
        <Header />
        {/* <HomePage onSetPage={() => this.onSetPage('home')} />
        <ContactPage onSetPage={() => this.onSetPage('contacst')} /> */}
        <div>{selectedPage ? <ContactPage /> : <HomePage />}</div>
        <button className="page-btn" onClick={this.onSelectedPage}>
          {selectedPage ? 'Home' : 'Contacts'}
        </button>
      </div>
    )
  }
}

// function App() {
//   state = {}

//   return (
//     <div className="main-app">
//       <Header />
//       <HomePage />
//       <ContactPage />
//     </div>
//   )
// }

// export default App
