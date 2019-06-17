import Taro, { Component } from '@tarojs/taro'
import { View, Button, Textarea } from '@tarojs/components'
import './replycontent.scss'

class ReplyContent extends Component {
  state = {
    value: ''
  }

  /**
   * 点击确定，提交评论或回复
   */
  btnOK () {
    if (this.state.value) {
      let value = this.state.value
      this.props.onOkReplyContent && this.props.onOkReplyContent(value)
    } else {
      Taro.showToast({title: '请输入评论内容', icon: 'none'})
    }
  }

  /**
   * 点击取消 返回到文章详情页面
   */
  btnCancel () {
    this.props.onCancelReplyContent && this.props.onCancelReplyContent()
  }

  /**
   * 同步文本域的值到state中，value用来发表评论或回复
   * @param event
   */
  changeContent (event) {
    if (event && event.target) {
      this.setState({value: event.target.value})
    }
  }

  render () {
    const {value}=this.state
    return (<View className='reply-content'>
      <Textarea value={value} onInput={this.changeContent.bind(this)} className='reply-content-text' placeholder='请输入回复内容' />
      <View className='reply-content-btn-group'>
        <Button onClick={this.btnOK.bind(this)} className='btn'>确定</Button>
        <Button onClick={this.btnCancel.bind(this)} className='btn'>取消</Button>
      </View>
    </View>)
  }
}

export default ReplyContent
