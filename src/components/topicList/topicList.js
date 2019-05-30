import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, ScrollView } from '@tarojs/components'
import Topic from './topic'
import { getTopicList } from '../../actions/topicList'
import './topicList.scss'

@connect(
  (store) => {
    return {
      ...store.topicList,
      currentCategory: store.menu.currentCategory
    }
  },
  {getTopicList}
)
class TopicList extends Component {

  componentDidMount () {
    let {page, limit, currentCategory, getTopicList} = this.props
    getTopicList && getTopicList({page, limit, tab: currentCategory.key})
  }

  onScrollToUpper (e) {
    console.log(e.detail)
  }

  onScroll (e) {
    console.log(e.detail)
  }

  render () {
    const {list} = this.props
    const scrollStyle = {
      height: 'calc(100vh - 28PX)'
    }
    const scrollTop = 0
    const Threshold = 20
    return <ScrollView
      className='scrollview'
      scrollY
      scrollWithAnimation
      scrollTop={scrollTop}
      style={scrollStyle}
      lowerThreshold={Threshold}
      upperThreshold={Threshold}
      onScrollToUpper={this.onScrollToUpper}
      onScroll={this.onScroll}
    >
      {
        list.map((item) => <Topic key={item.id} item={item} />)
      }
    </ScrollView>

  }
}

export default TopicList
