export function getNDays(n, isEndDate, isDashboard) {
  const now = new Date()
  const date = new Date(now.getTime() - n * 24 * 3600 * 1000)
  const year = date.getFullYear()
  const month =
    date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : '0' + (date.getMonth() + 1)
  const day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate()
  let resultDate
  if (isEndDate && !isDashboard) {
    resultDate = year + '-' + month + '-' + day + ' ' + '23:59:59'
  } else if (!isEndDate && !isDashboard) {
    resultDate = year + '-' + month + '-' + day + ' ' + '00:00:00'
  } else if (!isEndDate && isDashboard) {
    resultDate = year + '-' + month + '-' + day
  }
  return resultDate
}

export function DayString() {
  const dateObj = new Date()
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  const hour = dateObj.getHours()
  const minute = dateObj.getMinutes()
  const second = dateObj.getSeconds()
  return `${year}_${month}_${day} ${hour}_${minute}_${second}`
}
