import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './head.scss'

class Head extends Component {
  render () {
    let {loginname, avatar_url} = this.props
    return (<View className='login-head'>
      <Image className='login-head-back' src={require('../../assets/img/loginBack.jpg')} />
      <Image className='login-head-head' src={avatar_url ? avatar_url : require('../../assets/img/head.png')} />
      {loginname ? <Text className='login-head-name'>{loginname}</Text> : null}
    </View>)
  }
}

export default Head
