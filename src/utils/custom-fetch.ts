import axios from 'axios'

const snapiApi = "https://api.spaceflightnewsapi.net/v4/articles/"
const datastroApi ="https://www.datastro.eu/api/explore/v2.1/catalog/datasets/nasahubble/records"
const apodNasaApi = "https://api.nasa.gov/planetary/apod"
const webbApi = "https://api.jwstapi.com/all/type/jpg"
const spaceXApi = "https://api.spacexdata.com/v3/"
const requestTimeout = 10000

export const snapiCustomFetch = axios.create({
    baseURL : snapiApi,
    timeout: requestTimeout,
})


export const datastroCustomFetch = axios.create({
    baseURL : datastroApi,
    timeout: requestTimeout,
})

export const apodNasaCustomFetch = axios.create({
    baseURL : apodNasaApi,
    params : {api_key : import.meta.env.VITE_NASA_API_KEY},
    timeout: requestTimeout,
})

export const jwstCustomFetch = axios.create({
    baseURL : webbApi, 
    headers : {"X-API-KEY" : import.meta.env.VITE_JWST_API_KEY},
    timeout: requestTimeout,
})

export const spacexCustomFetch = axios.create({
    baseURL : spaceXApi,
    timeout: requestTimeout,
})
