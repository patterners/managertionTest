import * as React from 'react'

export class mark extends React.Component {

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default mark