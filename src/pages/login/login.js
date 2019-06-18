import Taro, { Component } from '@tarojs/taro'
import { View, Input, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import Head from '../../components/head/head'
import { accessUserToken } from '../../actions/user'
import './login.scss'

@connect(function (store) {
  return {user: store.user}
}, {accessUserToken})
class Login extends Component {
  config = {
    navigationBarTitleText: '登录'
  }
  state = {
    token: ''
  }

  changeToken (event) {
    if (event && event.target) {
      this.setState({token: event.target.value})
    }
  }

  //验证token
  loginToken () {
    if (this.state.token) {
      const {accessUserToken} = this.props
      if (accessUserToken) {
        accessUserToken({accesstoken: this.state.token})
          .then(result => {
           if (result){
             Taro.redirectTo({url: '/pages/user/user'})
           }else {
             Taro.showToast({title: 'accesstoken错误或无效',icon:'none'})
           }
          })
      }
    } else {
      Taro.showToast({title: '请输入秘钥再进行登录验证!', icon: 'none'})
    }
  }

  render () {
    return (<View className='login-body'>
      <Head />
      <View className='form'>
        <Input
          type='text'
          onInput={this.changeToken.bind(this)}
          className='access_input'
          placeholder='请输入accesstoken'
        />
        <Button onClick={this.loginToken.bind(this)} className='btn_login'>登录</Button>
      </View>
    </View>)
  }
}

export default Login
