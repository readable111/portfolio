import React, { Component } from 'react'
import { Link, redirect } from 'react-router'
import '../styles/newPost.css'

interface State {
  postText: string,
  postTitle: string,
  postDate: Date,
}

export default class NewPost extends Component {
  constructor(props: any) {
    super(props)
    this.state = {
      postText: "",
      postTitle: "",
      postDate: new Date(),
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange - this.handleTextChange.bind(this)
  }

  handleTitleChange = (event: any) => {
    this.setState({ postTitle: event.target.value })
  }

  handleTextChange = (event: any) => {
    this.setState({ postText: event.target.value })
  }



}
render() {
  return (
    <div className='mainContainer'>
      <div className='topBanner'></div>
      <label className='titleInput'>Post Title</label>
      <input className='titleInput' onChange={this.handleTitleChange} type='text' value={this.state.postTitle} />
      <label>Post Content</label>
      <input className='contentInput' onChange={this.handleTextChange} type='text' value={this.state.postText} />
    </div >
  )
}
}

