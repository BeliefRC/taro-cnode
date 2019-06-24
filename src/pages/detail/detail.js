import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button } from '@tarojs/components'
import TopicInfo from '../../components/topicInfo/topicInfo'
import Replies from '../../components/topicInfo/replies'
import ReplyContent from '../../components/topicInfo/replycontent'
import { getTopicInfo, admireTopic, replyContentValue } from '../../actions/topicList'
import { validateUser } from '../../actions/user'

import './detail.scss'

@connect(store => {
    return {
      topicInfo: store.topicList.topicInfo,
      replies: store.topicList.replies,
      user: store.user,
    }
  },
  {getTopicInfo, admireTopic}
)
export default class Detail extends Component {

  config = {
    navigationBarTitleText: '话题详情'
  }

  state = {
    showReplyContent: false,
    currentReply: null
  }

  componentDidMount () {
    this.getDetail()
  }

  /**
   * 获取话题详情数据
   */
  getDetail () {
    const {getTopicInfo, user} = this.props
    const {accesstoken} = user
    const {topicId} = this.$router.params
    getTopicInfo({topicId, accesstoken})
  }

  //提供给子组件使用的函数，回复评论
  replyToReply (reply) {
    this.setState({currentReply: reply, showReplyContent: true})
  }

  /**
   * 对当前文评论点赞
   * @param reply 当前评论对象
   */
  onAdmire (reply) {
    const {user} = this.props
    const params = {replyId: reply.id, accesstoken: user.accesstoken}
    admireTopic(params).then(result => {
      if (result.success) {
        this.getDetail()
      }
    })
  }

  /**
   * 评论或回复
   */
  reply () {
    validateUser(this.props.user).then(result => {
      if (result) {
        this.setState({showReplyContent: true})
      }
    })
  }

  /**
   * 关闭回复组件
   */
  closeReplyContent () {
    this.setState({showReplyContent: false})
  }

  /**
   * 点击确定按钮，进行回复操作
   * @param content
   */
  replyContent (content) {
    const {user} = this.props
    const {currentReply} = this.state
    const reply_id = currentReply ? currentReply.id : null
    const preName = currentReply ? '@' + currentReply.author.loginname + '   ' : ''//评论人的昵称
    const params = {
      reply_id: reply_id,
      content: preName + content,
      accesstoken: user.accesstoken,
      topicid: this.$router.params.topicId
    }
    replyContentValue(params)
      .then(result => {
        if (result.success) {
          this.getDetail()
          this.closeReplyContent()
        }
      })
  }

  render () {
    const {showReplyContent} = this.state
    const {topicInfo, replies, user} = this.props
    return (
      <View className='detail'>
        <TopicInfo topicInfo={topicInfo} />
        <Button className='reply-btn' onClick={this.reply.bind(this)}>回复</Button>
        <Replies
          replies={replies}
          user={user}
          onAdmire={this.onAdmire.bind(this)}
          onReplyToReply={this.replyToReply.bind(this)}
        />
        {showReplyContent ? <ReplyContent
          onCancelReplyContent={this.closeReplyContent.bind(this)}
          onOkReplyContent={this.replyContent.bind(this)}
        /> : null}
      </View>
    )
  }
}

