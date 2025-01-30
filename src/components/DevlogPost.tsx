import React, { Component } from 'react'
import "../styles/devlogPost.css"

interface Props {
    title:string;
    text:string;
    id:number;
    dateCreated:Date;
};

export default class DevlogPost extends Component<Props,{}>{
    constructor(props:Props){
        super(props)
    }

  render() {
    return (
      <div className='postContainer'>{this.props.title}</div>
    )
  }
}
