import { LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/user'
import { setCache, getCache } from '../utils/cache'

const cacheKey = 'cnode-user-key'
const userCache = getCache(cacheKey) ? getCache(cacheKey) : {}//读取缓存
const INITIAL_STATE = {
  ...userCache
}

export default function user (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      let successState = {...state, ...action}
      setCache(cacheKey, successState)//设置到缓存中
      return successState
    case LOGIN_FAIL:
      let failState = {...state, accesstoken: action.accesstoken, loginname: action.loginname}
      setCache(cacheKey, failState)//设置到缓存中
      return failState
    default:
      return state
  }
}
