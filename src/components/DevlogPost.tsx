import React, { Component } from 'react'
import "../styles/devlogPost.css"
import { Link } from 'react-router'

interface Props {
  title: string;
  text: string;
  id: number;
  dateCreated: Date;
};

export default class DevlogPost extends Component<Props, {}> {
  constructor(props: Props) {
    super(props)
  }


  render() {
    return (
      <Link to={`/post/${this.props.id}`}>
        <div className='postContainer'>
          <h2 className='title'>{this.props.title}</h2>
          <p className='text'>{this.props.text}</p>
        </div>
      </Link>
    )
  }
}
