import { SHOW_DRAWER, HIDE_DRAWER, CHANGE_CATEGORY } from '../constants/menu'

const INITIAL_STATE = {
  categoryData: [
    {key: 'all', value: '全部'},
    {key: 'good', value: '精华'},
    {key: 'share', value: '分享'},
    {key: 'ask', value: '问答'},
    {key: 'job', value: '招聘'},
    {key: 'dev', value: '客户端测试'}
  ],
  currentCategory: {key: 'all', value: '全部'},
  isShowDrawer: false
}

export default function menu (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SHOW_DRAWER:
      return {
        ...state,
        isShowDrawer: true
      }
    case HIDE_DRAWER:
      return {
        ...state,
        isShowDrawer: false
      }
    case CHANGE_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload.currentCategory
      }
    default:
      return state
  }
}
