import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './menu.less'

class Menu extends Component {

  render () {
    return (
      <View className='topic-list-menu'>
        <Image className='image' src={require('../../assets/img/cata.png')} />
        <Text>全部</Text>
        <Image className='image' src={require('../../assets/img/login.png')} />
      </View>
    )
  }
}

export default Menu
