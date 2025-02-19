import React, { Component } from 'react'
import { motion } from 'motion/react'
import DevlogPost from '../components/DevlogPost'
import Login from '../components/Login'
import axios from 'axios'
import "../styles/devlog.css"
import LoginButton from '../components/LoginButton'
import GlobalContext from '../components/GlobalContext'

type State = {
  loginVisible: boolean,
  isLoading: boolean,
  posts: any
}


export default class Devlog extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      loginVisible: false,
      isLoading: true,
      posts: {}
    }
    this.fetchPosts = this.fetchPosts.bind(this)
    this.showLoginModal = this.showLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.newPost = this.newPost.bind(this)
  }
  componentDidMount(): void {
    this.fetchPosts()
  }
  static contextType = GlobalContext;

  fetchPosts = () => {
    const data = axios.get("http://localhost:5000/fetchPosts",).then((response) => {
      this.setState({ posts: response.data, isLoading: false })
    }).catch((err) => {
      return err
    })
    return data
  }

  closeLoginModal = () => {
    console.log(this.state.posts)
    this.setState({ loginVisible: false })
  }

  showLoginModal = () => {
    this.setState({ loginVisible: true })
  }

  // will be function for submitting new post, was used as a tester for user verification from a access token

  newPost = () => {
    const { user } = this.context;
    console.log(user)
    const result = axios.get("http://localhost:5000/publishPost", {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': user
      }
    })
  }


  render() {
    const { user, updateUser, isLoggedIn } = this.context;
    return (
      <div className='container'>
        {isLoggedIn ? null : <LoginButton onClick={this.showLoginModal} />}
        {this.state.loginVisible ? (
          <div className='loginContainer'>
            <Login onClick={this.closeLoginModal} />
          </div>
        ) :
          null
        }
        {this.state.isLoading ? (
          <div>Loading Posts</div>

        ) : (
          (
            <div className='devlogContainer'>
              {this.state.posts.posts.map((element: any) => {
                return (<DevlogPost title={element.post_title} text={element.post_text} dateCreated={element.created_at} id={element.id}></DevlogPost>)
              })

              }
            </div>
          )
        )
        }
      </div>
    )
  }
}
