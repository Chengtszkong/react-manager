/**
 * 工具函数封装
 */

/**
 * 💰格式化金额
 * @param num {number | string} 数值
 * @return {string} 格式化后的值
 */
export const formatMoney = (num: number | string) => {
  const a = parseFloat(num.toString())
  return a.toLocaleString('zh-CN', { style: 'currency', currency: 'CNY' })
}

/**
 * 格式化日期
 * @param date {Date} 格式化日期
 * @param rule {string} 格式化规则
 */
export const toLocaleDate = (date?: Date, rule?: string) => {
  const curDate = date || new Date()
  if (rule === 'yyyy-MM-dd')
    return curDate.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
  if (rule === 'HH:mm:sss')
    return curDate
      .toLocaleTimeString('zh-CN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      .replaceAll('/', '-')
  return curDate
    .toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
    .replaceAll('/', '-')
}
