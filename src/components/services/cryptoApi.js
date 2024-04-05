const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-fSU7RjUoS4tKS565Dj5V88TM"
const getCoinList = (page , currency) => {
    return `${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`
}

const searchCoins = (query) => {
    return `${BASE_URL}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
}

export {getCoinList , searchCoins}