export default function myTimeToLocal (inputTime) {
  if (!inputTime && typeof inputTime !== 'number') {
    return ''
  }
  var localTime = ''
  inputTime = new Date(inputTime).getTime()
  const offset = (new Date()).getTimezoneOffset()
  localTime = (new Date(inputTime - offset * 60000)).toISOString()
  localTime = localTime.substr(0, localTime.lastIndexOf('.'))
  localTime = localTime.replace('T', ' ')
  return localTime
}
