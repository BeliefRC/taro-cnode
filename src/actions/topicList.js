import Taro from '@tarojs/taro'
import { getJSON, postJSON } from '../utils/request'
import api from '../constants/api'
import { GET_TOPIC_INFO, GET_TOPIC_LIST, APPEND_TOPIC_LIST } from '../constants/topicList'

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

/**
 * 点赞话题回复
 * @param params
 * @returns {Promise<boolean|*>}
 */
export async function admireTopic (params) {
  const result = await postJSON(api.upReply + params.replyId + '/ups', params)
  if (result && result.success) {
    //成功点赞
    return result
  } else {
    //点赞失败
    Taro.showToast({title: '点赞失败!', icon: 'none'})
  }
  return false
}

/**
 *  评论文章
 * @param params
 * @returns {Promise<boolean|{success}|any>}
 */
export async function replyContentValue (params) {
  const result = await postJSON(api.replyTopic + params.topicid + '/replies', params)
  if (result && result.success) {
    //评论成功
    return result
  } else {
    //评论失败
    Taro.showToast({title: '评论失败!', icon: 'none'})
  }
  return false
}
