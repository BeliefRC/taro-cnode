import { combineReducers } from 'redux'
import menu from './menu'
import topicList from './topicList'
import user from './user'

export default combineReducers({
  menu,
  topicList,
  user
})

