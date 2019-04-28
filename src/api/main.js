import axios from 'axios'

const base = 'users';

export function getInfo() {
  return axios({
    url:`${base}/getInfo`,
    methods:'get'
  })
}
export function getToken() {
  return axios({
    url:`${base}/getToken`,
    methods:'get'
  })
}
