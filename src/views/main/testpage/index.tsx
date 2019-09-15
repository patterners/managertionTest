import * as React from 'react'

export class testPage extends React.Component {

  public render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default testPage