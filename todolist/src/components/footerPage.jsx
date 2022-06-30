import { Component } from "react"
class Footer extends Component {

  render () {
    let { list } = this.props
    let total = list.length
    let achieve = list.filter((item) => item.checked === true).length
    return (
      <div className="footer">
        <input type="checkbox" checked={total === 0 ? false : (achieve === total ? true : false)} onChange={this.inpChange} />
        <span>已完成{achieve}/全部完成{total}</span>
        <button onClick={this.del} >删除已完成</button>
      </div>
    );
  }
  // 全选反选
  inpChange = () => {
    // 全选
    this.props.allSelector()
  }
  // 删除已完成
  del = () => {
    this.props.delFulfill()
  }

}

export default Footer;