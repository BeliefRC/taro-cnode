import { SHOW_DRAWER, HIDE_DRAWER, CHANGE_CATEGORY } from '../constants/menu'

/**
 * 显示抽屉
 * @returns {Function}
 */
export const showDrawer = () => {
  return dispatch => {
    dispatch({type: SHOW_DRAWER})
  }
}

/**
 * 隐藏抽屉
 * @returns {Function}
 */
export const hideDrawer = () => {
  return dispatch => {
    dispatch({type: HIDE_DRAWER})
  }
}
/**
 * 切换当前分类
 * @param currentCategory 当前分类的数据
 * @returns {Function}
 */
export const changeCategory = (currentCategory) => {
  return dispatch => {
    dispatch({type: CHANGE_CATEGORY, payload: {currentCategory}})
  }
}
