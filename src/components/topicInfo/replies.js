import Taro, { Component } from '@tarojs/taro'
import { View, Text, RichText, Image } from '@tarojs/components'
import myTimeToLocal from '../../utils/date'
import './replies.scss'

import { validateUser } from '../../actions/user'

class Replies extends Component {
  static defaultProps = {
    replies: []
  }

  /**
   * 点赞当前评论
   * @param reply 评论对象
   */
  admire (reply) {
    const {user, onAdmire} = this.props
    validateUser(user).then(result => {
      if (result) {
        onAdmire && onAdmire(reply)
      }
    })
  }

  /**
   *
   * @param item
   */
  replyToReply (item) {
    this.props.onReplyToReply && this.props.onReplyToReply(item)
  }

  render () {
    const {replies} = this.props
    return (<View className='topic-info-replies'>
      {replies.length ? <Text>{replies.length}条回复</Text> : null}
      {replies.map((item, index) =>
        <View key={item.id} className='topic-info-reply'>
          <Image className='topic-info-reply-image' src={item.author ? item.author.avatar_url : ''} />
          <View className='topic-info-reply-right'>
            <View className='topic-info-reply-right-body'>
              <View className='topic-info-reply-right-pie'>
                <Text className='login-name'>{item.author ? item.author.loginname : ''}</Text>
                <Text className='floor'>{(index + 1) + '楼'}</Text>
                <Text className='time'>{myTimeToLocal(item.create_at)}</Text>
              </View>
              <View className='topic-info-reply-right-content'>
                <RichText nodes={item.content} />
              </View>
            </View>
            <View className='topic-info-reply-right-zan'>
              <Image onClick={this.admire.bind(this, item)}
                className='topic-info-reply-image-icon'
                src={item.is_uped ?
                  require('../../assets/img/myzan.png') :
                  require('../../assets/img/zan.png')}
              />
              <Text className='topic-info-reply-right-zan-num'>{item.ups.length}</Text>
              <Image onClick={this.replyToReply.bind(this, item)}
                className='topic-info-reply-image-icon'
                src={require('../../assets/img/zhuan.png')}
              />
            </View>
          </View>
        </View>
      )}</View>)
  }
}

export default Replies
