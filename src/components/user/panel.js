import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import myTimeToLocal from '../../utils/date'
import './panel.scss'

class Panel extends Component {

  static  defaultProps = {
    listData: []
  }

  toDetail (item) {
    Taro.navigateTo({url: '/pages/detail/detail?topicId=' + item.id})
  }

  render () {
    let {listData, title} = this.props
    return (<View className='topic-panel'>
      <View className='topic-panel-title'>{title}</View>
      {listData.map((item) => {
        return (<View onClick={this.toDetail.bind(this, item)} className='topic-panel-list' key={item.id}>
          <Image className='topic-panel-list-img' src={item.author.avatar_url} />
          <Text className='topic-panel-list-title'>{item.title}</Text>
          <Text className='topic-panel-list-date'>{myTimeToLocal(item.last_reply_at)}</Text>
        </View>)
      })
      }
    </View>)
  }
}

export default Panel
