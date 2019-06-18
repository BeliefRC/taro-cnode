import Taro from '@tarojs/taro'
import api from '../constants/api'
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/user'
import { getJSON, postJSON } from '../utils/request'

//验证accesstoken
export function accessUserToken (params) {
  return async dispatch => {
    const result = await postJSON(api.checkUserToken, params)
    if (result && result.success) {
      dispatch({
        type: LOGIN_SUCCESS,
        accesstoken: params.accesstoken,
        loginname: result.loginname,
        avatar_url: result.avatar_url
      })
      return result
    } else {
      dispatch({type: LOGIN_FAIL, accesstoken: null, loginname: null})
    }
    return false
  }
}

//获取用户信息
export async function getUserInfo (params) {
  const result = await getJSON(api.getUserInfo + params.loginname)
  if (result && result.success) {
    return result
  } else {
    Taro.showToast({title: '拉取用户信息失败', icon: 'none'})
  }
}

//验证用户信息
export async function validateUser (params) {
  if (params && params.accesstoken) {
    return true
  }
  Taro.navigateTo({url: '/pages/login/login'})
  return false
}
