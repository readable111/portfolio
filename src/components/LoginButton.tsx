import React, { Component } from 'react'

interface Props{
    onClick:(event: React.MouseEvent) => void
}

export default class LoginButton extends Component<Props,{}> {
    constructor(props:Props){
        super(props)
    }
  render() {
    return (
        <button onClick={this.props.onClick}>Login</button>
    )
  }
}
