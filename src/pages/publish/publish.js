import Taro, { Component } from '@tarojs/taro'
import { Input, View, Button, Picker, Textarea } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { submitTopic, updateTopic } from '../../actions/topicList'
import './publish.scss'

@connect(function (store) {
  return {...store.menu, ...store.user, topicInfo: store.topicList.topicInfo}
})
class Publish extends Component {
  state = {
    selectCategory: null,
    title: null,
    content: null,
    isEdit: false
  }

  componentDidMount () {
    let {edit} = this.$router.params
    let {topicInfo,categoryData} = this.props
    const content=topicInfo ? this.filterHTMLTag(topicInfo.content) : ''
    this.setState({
      isEdit: edit === '1',
      topicInfo: topicInfo,
      title: topicInfo ? topicInfo.title : '',
      selectCategory:topicInfo?categoryData.find(item=>item.key===topicInfo.tab):null,
      content
    })
  }

  filterHTMLTag (msg='') {
    msg = msg.replace(/<\/?[^>]*>/g, '') //去除HTML Tag
    // msg = msg.replace(/[|]*\n/, '') //去除行尾空格
    // msg = msg.replace(/&nbsp;/ig, '') //去掉nbsp
    return msg
  }

  /**
   *  选择话题分类
   * @param event
   */
  changeCategory (event) {
    let {categoryData} = this.props
    // value值为数组索引
    this.setState({selectCategory: categoryData[event.detail.value]})
  }

  //标题改变
  titleChange (event) {
    this.setState({title: event.target.value})
  }

  //内容改变
  contentChange (event) {
    this.setState({content: event.target.value})
  }

  //提交
  submitTopic () {
    let {title, content, selectCategory, isEdit} = this.state
    let {accesstoken, topicInfo} = this.props
    if (title && content && selectCategory) {
      let params = {tab: selectCategory.key, title, content, accesstoken, topic_id: topicInfo.id}
      // 判断是新增还是编辑，做不同的数据操作
      if (isEdit) {
        updateTopic(params).then(result => {
          if (result) {
            Taro.navigateBack()
          }
        })
      } else {
        submitTopic(params).then(result => {
          if (result) {
            Taro.redirectTo({url: '/pages/user/user'})
          }
        })
      }
    } else {
      Taro.showToast({title: '分类或者标题内容都不能为空!', icon: 'none'})
    }
  }

  render () {
    const {categoryData} = this.props
    const {selectCategory, topicInfo, isEdit} = this.state
    return (<View className='publish-topic'>
      <Input
        type='text'
        value={isEdit ? (topicInfo ? topicInfo.title : '') : ''}
        className='publish-topic-title'
        onInput={this.titleChange.bind(this)}
        placeholder='请输入你要发布的标题'
      />
      <Textarea
        value={isEdit ? (topicInfo ? this.filterHTMLTag(topicInfo.content) : '') : ''}
        className='publish-topic-content'
        onInput={this.contentChange.bind(this)}
        placeholder='请输入您要发布的内容'
      />
      <Picker
        onChange={this.changeCategory.bind(this)} mode='selector'
        range={categoryData} rangeKey='value'
      >
        <View className='publish-topic-category'>{selectCategory ? selectCategory.value : '请选择'}</View>
      </Picker>
      <Button className='publish-topic-btn' onClick={this.submitTopic.bind(this)}>提交</Button>
    </View>)
  }
}

export default Publish
