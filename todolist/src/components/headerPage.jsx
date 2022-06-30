import { Component } from "react"

class Header extends Component {
  state = {}
  render () {
    return (
      <div className="header">
        <input type="text" placeholder="请输入任务名称，按回车键确认" onKeyDown={this.mouseDown} />
      </div>
    );
  }
  mouseDown = (e) => {
    if (e.keyCode === 13) {
      this.props.editList(e.target.value)
      e.target.value = ""
    }
  }
}

export default Header;