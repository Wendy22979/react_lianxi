import { Component } from "react"
// 引入数据
import { Consumer } from "../App"
class List extends Component {
  state = {}
  render () {
    return (
      <div>
        <Consumer>
          {
            ({ amend, delItem }) => {
              let change = () => {
                amend(this.props.item.id)
              }
              return (
                <div>
                  <input type="checkbox" checked={this.props.item.checked} onChange={change} />
                  <span>{this.props.item.item}</span>
                  <button style={{ float: "right", marginTop: 10 + "PX", marginRight: 10 + "px" }} onClick={() => { delItem(this.props.item.id) }}>删除</button>
                </div>
              )
            }
          }
        </Consumer >
      </div >

    )
  }

}

export default List;