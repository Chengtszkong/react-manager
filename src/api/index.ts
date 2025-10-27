import request from '@/utils/request.ts'
import { type Login, type User } from '@/types/api.ts'

export default {
  // 登录
  login(params: Login.params) {
    return request.post('/login', params)
  },
  // 获取用户信息
  getUserInfo() {
    return request.get<User.UserItem>('/users/getUserInfo')
  }
}
