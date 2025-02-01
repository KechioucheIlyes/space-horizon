import axios from 'axios'

const snapiApi = "https://api.spaceflightnewsapi.net/v4/articles/"


export const snapiCustomFetch = axios.create({
    baseURL : snapiApi,
})