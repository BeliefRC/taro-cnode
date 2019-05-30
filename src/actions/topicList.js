import { getJSON, postJSON } from '../utils/request'
import api from '../constants/api'
import { ADMIRE_SUCCESS, GET_TOPIC_INFO, GET_TOPIC_LIST, APPEND_TOPIC_LIST } from '../constants/topicList'

/**
 * 根据主题获取列表数据
 * @returns {Function}
 */
export const getTopicList = (params) => {
  return async dispatch => {
    const result = await getJSON(api.getTopics, params)
    if (result && result.success === true) {
      if (params.page <= 1) {
        dispatch({type: GET_TOPIC_LIST, payload: {list: result.data}})
      } else {
        //只有当有值的时候，才需要page++和拼接数据
        if (result.data.length) {
          dispatch({
            type: APPEND_TOPIC_LIST,
            payload: {
              list: result.data,
              page: params.page
            }
          })
        }
      }
    }
  }
}

/**
 * 请求话题详情
 * @param params
 * @returns {Function}
 */
export function getTopicInfo (params) {
  return async dispatch => {
    const result = await getJSON(`${api.getTopicInfo}/${params.topicId}`, params)
    if (result && result.success) {
      dispatch({type: GET_TOPIC_INFO, payload: {infoData: result.data}})
    } else {
      console.error('请求话题详情失败！')
    }
  }
}