import Taro, { Component } from '@tarojs/taro'
import { View, Text, RichText, Image } from '@tarojs/components'
import myTimeToLocal from '../../utils/date'
import './topicInfo.scss'

class TopicInfo extends Component {
  static defaultProps = {
    topicInfo: {}
  }

  // 删除话题
  delTopic (topicInfo) {
    this.props.onDelTopic && this.props.onDelTopic(topicInfo)
  }

  //编辑话题
  editTopic () {
    Taro.redirectTo({url: '/pages/publish/publish?edit=1'})
  }

  render () {
    const {topicInfo, selfPublish} = this.props
    return <View className='topic-info'>
      <View className='topic-info-header'>
        <View className='topic-info-header-title'>{topicInfo.top ? <Text
          className='topic-up'
        >置顶</Text> : (topicInfo.tab === 'share' ? <Text className='topic-up blue'>分享</Text> : <Text
          className='topic-up blue'
        >问答</Text>)}
          <Text>{topicInfo.title}</Text></View>
        <View className='topic-info-header-pie'>
          <Text>{myTimeToLocal(topicInfo.create_at)}</Text>
          <Text>{topicInfo.author ? topicInfo.author.loginname : ''}</Text>
          <Text>{topicInfo.visit_count + '次浏览'}</Text>
        </View>
        {
          selfPublish ? <View className='topic-info-header-img'>
            <Image
              onClick={this.delTopic.bind(this, topicInfo)}
              className='img'
              src={require('../../assets/img/del.png')}
            />
            <Image
              onClick={this.editTopic.bind(this, topicInfo)}
              className='img'
              src={require('../../assets/img/edit.png')}
            />
          </View> : null
        }
      </View>
      <View className='topic-info-body'>
        <RichText
          nodes={topicInfo.content ? topicInfo.content.replace(/\<img/gi, '<img style="max-width:100%;height:auto"') : ''}
        />
      </View>
    </View>
  }
}

export default TopicInfo
