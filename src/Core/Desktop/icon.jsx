import React from 'react'
import { Item, Icon } from './elements'
import { Menu, Action } from '../../Components/ContextMenu'

class DesktopIcon extends React.PureComponent {
  handleClick = () => {
    const { onClick } = this.props
    if (onClick) onClick()
  }

  render() {
    const { contextMenu, src } = this.props
    const icon = <Icon logo={src} onClick={this.handleClick.bind(this)} />

    if (contextMenu) {
      const items = contextMenu.map(({ item, onClick }, i) => (
        <Action onClick={onClick ? onClick : null} key={i}>
          {item}
        </Action>
      ))

      return (
        <Item>
          <Menu items={items}>{icon}</Menu>
        </Item>
      )
    }

    return <Item>{icon}</Item>
  }
}

export default DesktopIcon
