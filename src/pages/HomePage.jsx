import { Component } from 'react'

import { userService } from '../services/userService'
import { bitCoinService } from '../services/bitcoinService'
import { StatisticPage } from './StatisticPage'

export class HomePage extends Component {
  state = {
    users: null,
    rate: 0,
  }

  componentDidMount() {
    this.loadUsers()
    this.loadRate()
  }

  loadUsers() {
    const users = userService.getUser()
    this.setState({ users })
  }
  async loadRate() {
    const rate = await bitCoinService.getRate(100)
    this.setState({ rate })
  }

  render() {
    const { users, rate } = this.state
    if (!users && !rate) return <div>Loading...</div>
    return (
      <section className="home-page">
        <h1>Hi, {users.name}</h1>
        <p>CURRENT BALANCE</p>
        <h2>BIT: {users.coins}</h2>
        <h2>USD: $ {rate}</h2>
        <StatisticPage />
      </section>
    )
  }
}
