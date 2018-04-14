import React from 'react'
import { Icon } from './elements'
import { Menu, Action } from '../../Components/ContextMenu'

class DockIcon extends React.PureComponent {
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

      return <Menu items={items}>{icon}</Menu>
    }

    return icon
  }
}

export default DockIcon
