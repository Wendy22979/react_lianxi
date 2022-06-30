import { Component } from "react"
// 引入组件
import List from "./listPage"
class Main extends Component {
  state = {
  }
  render () {
    return (
      <div className="main">
        <ul>
          {this.props.list.map((value) => {
            return (
              <li key={value.id}>
                <List item={value} />
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default Main;