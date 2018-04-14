import React from 'react'
import { Bar } from './elements'

class MenuBar extends React.PureComponent {
  render() {
    return <Bar>{this.props.children}</Bar>
  }
}

export default MenuBar
export { default as MenuItem } from './item'
