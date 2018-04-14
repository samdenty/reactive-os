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

class MenuItem extends React.PureComponent {
  state = {
    open: false
  }
  trigger

  toggle = (event) => {
    if (this.state.open) {
      this.close()
    } else if (this.trigger) {
      this.open(event)
    }
  }

  open = (event) => {
    this.setState({
      open: true
    })

    const position = offset(event.target)
    event.clientX = position.left
    event.clientY = position.top
    this.trigger.handleContextClick(event)

    window.addEventListener('click', this.close)
  }

  close = () => {
    this.setState({
      open: false
    })
    window.removeEventListener('click', this.close)
  }

  render() {
    const { contextMenu } = this.props

    const item = (
      <Item onClick={this.toggle.bind(this)} open={this.state.open}>
        {this.props.children}
      </Item>
    )

    if (contextMenu) {
      return (
        <Menu
          items={contextMenu.map(({ item, onClick }, i) => (
            <Action onClick={onClick ? onClick : null} key={i}>
              {item}
            </Action>
          ))}
          trigger={(trigger) => (this.trigger = trigger)}
          dropdown>
          {item}
        </Menu>
      )
    }
    return item
  }
}

export default MenuItem
