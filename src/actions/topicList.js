import { getJSON, postJSON } from '../utils/request'
import api from '../constants/api'
import { ADMIRE_SUCCESS, GET_TOPIC_INFO, GET_TOPIC_LIST, APPEND_TOPIC_LIST } from '../constants/topicList'

/**
 * 根据主题获取列表数据
 * @returns {Function}
 */
export const getTopicList = (params) => {
  return async dispatch => {
    let result = await getJSON(api.getTopics, params)
    if (result && result.data) {
      if (result.data.success) {
        dispatch({type: GET_TOPIC_LIST, payload: {list:result.data.data}})
      }
    }
  }
}
