import axios from 'axios'
import IUser from '@/types/user.type'

export async function call (method: 'POST' | 'GET' | 'DELETE', url: string, params: any = {}) {

  url = '/api' + url
  const headers = {
    'Content-Type': 'application/json'
  }
  const request = method == 'POST' || method == 'DELETE'
    ? { data: params }
    : { params }
  return axios({ method, url, headers, ...request })
    .then((r: any) => Promise.resolve(r.data))
    .catch((e: any) => Promise.reject(e.response.data.message))
}

const API = {
  getUsers: async function (): Promise<IUser[]> {
    return call('GET', `/users`)
  },

}
export default API
