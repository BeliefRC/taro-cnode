import Taro from '@tarojs/taro'
import '@tarojs/async-await'

export function getJSON (url, data) {
  Taro.showLoading({title: '请求中', mask: true})
  return Taro.request({
    url: url,
    data: data,
    method: 'GET'
  })
    .then(result => {
      Taro.hideLoading()
      return result.data
    }).catch(e => {
      console.error(e)
      Taro.showLoading({title: '请求失败'})
      setTimeout(() => {
        Taro.hideLoading()
      }, 2e3)
    })
}

export function postJSON (url, data) {
  Taro.showLoading({title: '请求中', mask: true})
  return Taro.request({
    header: {
      'content-type': 'application/json'
    },
    url: url,
    data: data,
    method: 'POST'
  })
    .then(result => {
      Taro.hideLoading()
      return result.data
    }).catch(e => {
      console.error(e)
      Taro.showLoading({title: '请求失败'})
      setTimeout(() => {
        Taro.hideLoading()
      }, 2e4)
    })
}
