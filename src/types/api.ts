// 接口类型定义

/**
 * Request Result
 */
export interface Result<T> {
  code: number
  data: T
  msg: string
}

export namespace Login {
  export interface params {
    username: string
    password: string
  }
}

export namespace User {
  export interface UserItem {
    userId: number
    username: string
    avatar: string
    role: number
  }
}
