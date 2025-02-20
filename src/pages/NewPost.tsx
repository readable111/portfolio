import React, { Component } from 'react'
import { Link, redirect } from 'react-router'
import '../styles/newPost.css'
import backArrow from '../assets/arrow_back.png'
import axios from 'axios'
import GlobalContext from '../components/GlobalContext'

interface State {
  postText: string,
  postTitle: string,
}


export default class NewPost extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      postText: "",
      postTitle: "",
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.submitPost = this.submitPost.bind(this)
  }

  static contextType = GlobalContext

  handleTitleChange = (event: any) => {
    this.setState({ postTitle: event.target.value })
  }

  handleTextChange = (event: any) => {
    this.setState({ postText: event.target.value })
  }

  submitPost = async () => {
    const { user } = this.context
    const post = {
      title: this.state.postTitle,
      text: this.state.postText,
    }

    const result = axios.post("http://localhost:5000/publishPost", post, {
      headers: {
        "Content-Type": "application/json", "Authorization": user
      }
    }).then((response) => {
      return {
        status: response.status,
        data: response.data
      }
    }
    )
  }


  render() {

    return (
      <div className='newPostContainer'>
        <Link to='/'>
          <img className="back" src={backArrow} />
        </Link>
        <div className='titleContainer'>
          <label className='title'>Post Title</label>
          <input className='titleInput' onChange={this.handleTitleChange} type='text' value={this.state.postTitle} />
        </div>
        <div className='textContainer'>
          <label className='post'>Post Content</label>
          <textarea className='contentInput' onChange={this.handleTextChange} type='text' value={this.state.postText} />
          <button className='postButton' onClick={this.submitPost}>Post</button>
        </div>
      </div >
    )
  }
}

