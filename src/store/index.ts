import { create } from 'zustand'
import { type User } from '@/types/api.ts'

export const useBearStore = create<{
  userInfo: {
    userId: number
    username: string
    avatar: string
  }
  collapsed: boolean
  updateUserInfo: (userInfo: User.UserItem) => void
  updateCollapsed: () => void
}>(set => ({
  userInfo: {
    userId: 0,
    username: '',
    avatar: ''
  },
  collapsed: false,
  updateUserInfo: (userInfo: User.UserItem) => set({ userInfo }),
  updateCollapsed: () => set(state => ({ collapsed: !state.collapsed }))
}))
