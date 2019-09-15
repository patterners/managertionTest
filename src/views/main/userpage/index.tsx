import * as React from 'react'

export class userName extends React.Component {
  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default userName