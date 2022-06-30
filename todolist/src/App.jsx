import React, { Component } from "react"
import './App.css';
// 引入组
import Header from "./components/headerPage"
import Main from "./components/mainPage"
import Footer from "./components/footerPage"
// 本地存储
import { setList, getList } from "./uilte/index"

// 祖孙通信
let { Provider, Consumer } = React.createContext()
export { Consumer }
class App extends Component {
  state = {
    list: getList(),//列表数据
  }
  checked = this.state.list.some((item) => item.checked === true)//全选反选状态
  render () {
    console.log(this.state.list, "list")
    return (
      <Provider
        value={{
          amend: this.amend,
          delItem: this.delItem
        }}
      >
        <div className="App" >
          <div className='container'>
            <div className="title">
              <h2>每天一个小目标</h2>
            </div>
            <Header editList={this.editList} />
            <Main list={this.state.list} />
            <Footer
              list={this.state.list}
              checked={this.state.checked}
              allSelector={this.allSelector}
              delFulfill={this.delFulfill}

            />
          </div>
        </div>
      </Provider>
    );
  }
  // 修改添加数据
  editList = (item) => {
    let arr = { id: this.state.list.length + 1, item: item, checked: false }
    this.setState({
      list: [arr, ...this.state.list]
    }, () => {
      setList(this.state.list) //同步数据
    })
  }
  //改变状态checked
  amend = (id) => {
    // 更改每个item选中状态
    let arr = this.state.list.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked
      }
      return item
    })
    this.setState({
      list: arr
    }, () => {
      // 本地同步
      setList(this.state.list)
    })
  }
  // 全选与不选
  allSelector = () => {
    // 修改全选状态
    this.checked = !this.checked
    // 修改每个item的状态
    let arr = this.state.list.map((item) => {
      item.checked = this.checked
      return item
    })
    // 更新数据
    this.setState({
      list: arr,
    }, () => {
      // 本地同步
      setList(this.state.list)
    })
  }

  // 删除已完成
  delFulfill = () => {
    let arr = this.state.list.filter((item) => {
      return item.checked === false
    })
    this.setState({
      list: arr,
    }, () => {
      // 本地同步,删除数据
      setList(this.state.list)
    })
  }

  // item删除
  delItem = (id) => {
    // 过滤
    let arr = this.state.list.filter((item) => item.id !== id)
    // 修改数据更新
    this.setState({
      list: arr
    }, () => {
      // 本地同步
      setList(this.state.list)
    })
  }

}

export default App;

