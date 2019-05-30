import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'
import { getTopicInfo } from '../../actions/topicList'
import './index.scss'

@connect(store => {
    return {
      topicInfo: store.topicList.topicInfo,
      replies: store.topicList.replies,
    }
  },
  {getTopicInfo}
)
export default class Detail extends Component {

  config = {
    navigationBarTitleText: '话题详情'
  }

  componentDidMount () {
    this.getDetail()
  }

  getDetail () {
    const {getTopicInfo} = this.props
    const topicId = this.$router.params.topicId
    getTopicInfo({topicId})
  }

  render () {
    const {topicInfo} = this.props
    return (
      <View className=''>
        {topicInfo.title}
      </View>
    )
  }
}

