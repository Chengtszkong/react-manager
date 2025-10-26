import axios, { type AxiosError } from 'axios'
import { hideLoading, showLoading } from '@/utils/loading'
import type { Result } from '@/types/api.ts'
import storage from '@/utils/storage.ts'
import { message } from '@/utils/AntdGlobal.tsx'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

instance.interceptors.request.use(
  config => {
    showLoading()

    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = `Bearer ${token}`

    // 更改 baseURL
    config.baseURL =
      import.meta.env.VITE_MOCK === 'true'
        ? import.meta.env.VITE_MOCK_URL
        : import.meta.env.VITE_BASE_URL

    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    hideLoading()
    const data: Result<never> = response.data
    if (data.code === 500001) {
      message.error(data.msg)
      storage.remove('token')
      location.href = '/login'
    } else if (data.code != 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  (error: AxiosError) => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return instance.get(url, { params })
  },
  post<T>(url: string, data?: object): Promise<T> {
    return instance.post(url, data)
  }
}
