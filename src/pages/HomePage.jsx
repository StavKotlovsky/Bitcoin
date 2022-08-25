import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../store/actions/userActions'
import { bitCoinService } from '../services/bitcoinService'
import { StatisticPage } from './StatisticPage'

export const HomePage = () => {
  const [rate, setRate] = useState()
  const user = useSelector((state) => state.userModule.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
    loadRate()
  }, [])

  const loadRate = async () => {
    const rate = await bitCoinService.getRate(200)
    setRate(rate)
  }

  if (!user && !rate) return <div>Loading...</div>
  return (
    <section className="home-page">
      <h1>Hi, {user.name}</h1>
      <p>CURRENT BALANCE</p>
      <h2>BIT: {user.coins}</h2>
      <h2>USD: $ {rate}</h2>
      <StatisticPage />
    </section>
  )
}
