import React from 'react'
import { Item } from './elements'
import { Menu, Action } from '../../Components/ContextMenu'

function offset(el) {
  const rect = el.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {
    top: rect.top + scrollTop + rect.height,
    left: rect.left + scrollLeft
  }
}

class DockItem extends React.PureComponent {
  state = {
    open: false
  }
  trigger

  toggle = (event) => {
    if (this.state.open) {

    } else if (this.trigger) {
      const position = offset(event.target)
      event.clientX = position.left
      event.clientY = position.top
      this.trigger.handleContextClick(event)
    }

    this.setState({
      open: !this.state.open
    })
  }

  render() {
    const items = (
      <React.Fragment>
        <Action>test</Action>
      </React.Fragment>
    )

    return (
      <Menu
        items={items}
        trigger={(trigger) => (this.trigger = trigger)}
        dropdown>
        <Item onClick={this.toggle.bind(this)} open={this.state.open}>{this.props.children}</Item>
      </Menu>
    )
  }
}

export default DockItem
