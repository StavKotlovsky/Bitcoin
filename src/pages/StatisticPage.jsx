import { Component } from 'react'
import { StatChart } from '../cmps/StatChart.jsx'

import Chart from 'chart.js/auto'
import { Filler } from 'chart.js'
import { bitCoinService } from '../services/bitcoinService.js'
Chart.register(Filler)

export class StatisticPage extends Component {
  state = {
    priceMarketData: null,
    avgTransactionData: null,
  }

  componentDidMount() {
    this.loadPriceData()
    this.loadTransactionAvg()
  }
  componentWillUnmount() {}
  async loadPriceData() {
    const priceMarketData = await bitCoinService.getMarketPrice()
    this.setState({ priceMarketData }, () => {})
  }

  async loadTransactionAvg() {
    const avgTransactionData = await bitCoinService.getConfirmedTransactions()
    this.setState({ avgTransactionData }, () => {})
  }

  render() {
    const { priceMarketData, avgTransactionData } = this.state
    if (!priceMarketData || !avgTransactionData) return <div>Loading...</div>
    return (
      <section className="statistic-page container">
        <StatChart info={priceMarketData} />
        <StatChart info={avgTransactionData} />
      </section>
    )
  }
}
