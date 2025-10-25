/**
 * localStorage 模块封装
 */

export default {
  /**
   * storage 存储
   * @param key {string} 参数名称
   * @param value {any} 写入值
   */
  set(key: string, value: any) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }
    window.localStorage.setItem(key, value)
  },
  /**
   * storage 读取
   * @param key {string} 参数名称
   * @return stroage 值
   */
  get(key: string) {
    const value = window.localStorage.getItem(key)
    if (!value) return ''
    try {
      return JSON.parse(value)
    } catch {
      return value
    }
  },
  /**
   * storage 值移除
   * @param key {string} 参数名称
   */
  remove(key: string) {
    window.localStorage.removeItem(key)
  },
  /**
   * storage 值清空
   */
  clear() {
    window.localStorage.clear()
  }
}
