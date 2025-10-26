import request from '@/utils/request.ts'
import { type Login } from '@/types/api.ts'

export default {
  login(params: Login.params) {
    return request.post('/login', params)
  }
}
