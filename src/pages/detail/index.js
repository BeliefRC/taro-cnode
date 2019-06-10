import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import TopicInfo from '../../components/topicInfo/topicInfo'
import Replies from '../../components/topicInfo/replies'
import { getTopicInfo, admireTopic } from '../../actions/topicList'
import './index.scss'

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

  componentDidMount () {
    this.getDetail()
  }

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
   * 获取话题详情数据
   */
  getDetail () {
    const {getTopicInfo, user} = this.props
    const {accesstoken} = user
    const {topicId} = this.$router.params
    getTopicInfo({topicId, accesstoken})
  }

  render () {
    const {topicInfo, replies, user} = this.props
    return (
      <View className=''>
        <TopicInfo topicInfo={topicInfo} />
        <Replies replies={replies} user={user} onAdmire={this.onAdmire.bind(this)} />
      </View>
    )
  }
}

