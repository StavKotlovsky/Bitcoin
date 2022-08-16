import axios from 'axios'
import { storageService } from './storageService.js'

export const bitCoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

const RATE_KEY = 'rateDB'
const rateCache = storageService.load(RATE_KEY) || {}

const PRICE_KEY = 'priceDB'
const priceCache = storageService.load(PRICE_KEY) || {}

const TRANSACTIONS_KEY = 'transactionDB'
const transactionsCache = storageService.load(TRANSACTIONS_KEY) || {}

async function getRate(coins) {
  if (rateCache[coins]) {
    console.log('getting from cache')
    return rateCache[coins]
  }
  try {
    const rateData = await axios.get(
      `https://blockchain.info/tobtc?currency=USD&value=${coins}`
    )
    rateCache[coins] = rateData.data
    storageService.save(RATE_KEY, rateCache)
    return rateData.data
  } catch (e) {
    console.error(e)
  }
}

async function getMarketPrice(range = '5months') {
  if (priceCache[range]) {
    return priceCache[range]
  }
  try {
    const priceData = await axios.get(
      `https://api.blockchain.info/charts/market-price?timespan=${range}&format=json&cors=true#`
    )
    priceCache[range] = priceData.data
    storageService.save(PRICE_KEY, priceCache)
    return priceData.data
  } catch (e) {
    console.error(e)
  }
}

async function getConfirmedTransactions(range = '5months') {
  if (transactionsCache[range]) {
    return transactionsCache[range]
  }
  try {
    const transactionData = await axios.get(
      `https://api.blockchain.info/charts/n-transactions?timespan=${range}&format=json&cors=true#`
    )
    transactionsCache[range] = transactionData.data
    storageService.save(TRANSACTIONS_KEY, transactionsCache)
    return transactionData.data
  } catch (e) {
    console.error(e)
  }
}
