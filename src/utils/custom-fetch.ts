import axios from 'axios'

const snapiApi = "https://api.spaceflightnewsapi.net/v4/articles/"
const datastroApi ="https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records"

export const snapiCustomFetch = axios.create({
    baseURL : snapiApi,
})


export const datastroCustomFetch = axios.create({
    baseURL : datastroApi
})
