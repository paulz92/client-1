import $axios from 'axios'


export const axios = $axios.create({
  baseURL: 'https://torq-api.herokuapp.com/',
})
