import React from 'react'
import { Menu as ContextMenu, Trigger } from './elements'
import GUID from 'guid'

export class Menu extends React.Component {
  componentWillMount() {
    this.id = GUID.create().value
  }

  render() {
    const { trigger, dropdown } = this.props

    return (
      <React.Fragment>
        <Trigger
          id={this.id}
          innerRef={(ref) => {
            if (trigger) trigger(ref)
          }}
          holdToDisplay={-1}>
          {this.props.children}
        </Trigger>

        <ContextMenu id={this.id} dropdown={dropdown}>
          {this.props.items}
        </ContextMenu>
      </React.Fragment>
    )
  }
}

export { Action } from './elements'
