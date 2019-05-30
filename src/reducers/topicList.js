import { ADMIRE_SUCCESS, GET_TOPIC_INFO, GET_TOPIC_LIST, APPEND_TOPIC_LIST } from '../constants/topicList'

const INITIAL_STATE = {
  page: 1,
  limit: 20,
  list: [],
  topicInfo: {},
  replies: [],
  admireState: false  //点赞状态
}

export default function topicList (state = INITIAL_STATE, action) {
  const {list, page, infoData} = action.payload || {}
  switch (action.type) {
    case  ADMIRE_SUCCESS:
      return {...state, admireState: !state.admireState}
    case GET_TOPIC_INFO:
      return {...state, topicInfo: {...infoData, replies: null}}
    case GET_TOPIC_LIST:
      return {...state, list, page: 1}
    case  APPEND_TOPIC_LIST:
      return {...state, list: state.list.concat(list), page}
    default:
      return state
  }
}
