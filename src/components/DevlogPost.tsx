import React, { Component } from 'react'
import "../styles/devlogPost.css"

type Props = {
    title:string;
    text:string;
    id:number;
    dateCreated:Date;
};

export default class DevlogPost extends Component<Props>{
    constructor(props:Props){
        super(props)
        this.state = {
            text: props.text,
            title: props.title,
            id: props.id,
            dateCreated: props.dateCreated
        }
    }

  render() {
    return (
      <div className='postContainer'>{this.state.title}</div>
    )
  }
}
