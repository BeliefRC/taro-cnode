import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Image } from '@tarojs/components'
import { AtDrawer } from 'taro-ui'
import { showDrawer, hideDrawer, changeCategory } from '../../actions/menu'
import './menu.scss'

@connect(
  (store) => {
    return {...store.menu}
  },
  {showDrawer, hideDrawer, changeCategory}
)
class Menu extends Component {
  /**
   * 获取抽屉里的数据列表名称
   * @param categoryData
   * @returns {*}
   */
  getDrawerItems (categoryData) {
    return categoryData.map(item => item.value)
  }

  /**
   *点击抽屉中的分类项
   * @param index 抽屉数据的索引
   */
  clickCategory (index) {
    const {categoryData, changeCategory, currentCategory} = this.props
    const clickedCategory = categoryData[index]
    if (clickedCategory.key !== currentCategory.key) {
      changeCategory(clickedCategory)
    }
  }

  render () {
    const {categoryData, currentCategory, isShowDrawer, showDrawer, hideDrawer} = this.props
    const drawerItems = this.getDrawerItems(categoryData)
    return (<View>
        <View className='topic-list-menu'>
          <Image onClick={showDrawer} className='image' src={require('../../assets/img/cata.png')} />
          <Text>{currentCategory ? currentCategory.value : null}</Text>
          <Image className='image' src={require('../../assets/img/login.png')} />
        </View>
        <AtDrawer
          style='position:absolute;'
          show={isShowDrawer}
          onItemClick={this.clickCategory.bind(this)}
          mask
          onClose={hideDrawer}
          items={drawerItems}
        />
      </View>
    )
  }
}

export default Menu
