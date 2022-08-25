import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="app-header">
      <h1>Mr:BitCoin</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </nav>
    </header>
  )
}
