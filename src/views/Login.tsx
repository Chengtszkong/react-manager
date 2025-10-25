import { useEffect } from 'react'
import request from '@/utils/request.ts'
import { formatMoney, toLocaleDate } from '@/utils'

function Login() {
  console.log(formatMoney(12345678.9857))
  console.log(toLocaleDate())
  useEffect(() => {
    request
      .post<string>('/users/login', { id: '1213' })
      .then(res => console.log(res))
  }, [])

  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

export default Login
