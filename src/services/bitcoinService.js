import axios from 'axios'

export const bitcoinService = {
  getRate,
  getMarketPrice,
}

// async function getRate(coins) {
//   try {
//     const rate = await axios.get(
//       `https://blockchain.info/tobtc?currency=USD&value=${coins}`
//     )
//     console.log('rate.data', rate.data)
//     return rate.data
//   } catch (err) {
//     console.log('err in getRate:', err)
//   }
// }

async function getRate(coins) {
  const rate = 0.00004068
  try {
    return rate
  } catch (err) {
    console.log('err in getRate:', err)
  }
}

async function getMarketPrice() {
  const marketPrice = await axios.get(
    `https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`
  )
  console.log('marketPrice', marketPrice)
}
