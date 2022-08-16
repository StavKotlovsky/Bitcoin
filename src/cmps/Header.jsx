import { NavLink, withRouter } from 'react-router-dom'

export function _Header() {
  return (
    <header className="app-header">
      <h1>Mr:BitCoin</h1>
      <nav>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </nav>
    </header>
  )
}
export const Header = withRouter(_Header)
