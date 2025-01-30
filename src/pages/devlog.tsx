import React, { Component } from 'react'
import {motion} from 'motion/react'
import DevlogPost from '../components/DevlogPost'
import Login from '../components/Login'
import axios from 'axios'
import "../styles/devlog.css"
import LoginButton from '../components/LoginButton'

type State = {
  loginVisible:boolean,
  isLoading:boolean,
  posts: any
}


export default class Devlog extends Component<{},State> {
  constructor(props:any){
    super(props)
    this.state={
      loginVisible: false,
      isLoading: true,
      posts: {}
    }
    this.fetchPosts = this.fetchPosts.bind(this)
    this.showLoginModal = this.showLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
  }
  componentDidMount(): void {
    this.fetchPosts()
  }

  fetchPosts = () =>{
      const data = axios.get("http://localhost:5000/fetchPosts",).then((response)=>{
         this.setState({posts:response.data, isLoading: false})
      }).catch((err)=>{
        return err
      })
      return data
  }

  closeLoginModal = () =>{
    console.log(this.state.posts)
    this.setState({loginVisible: false})
  }

  showLoginModal = () =>{
    this.setState({loginVisible: true})
  }


  render() {
    return (
      <div className='container'>
        <LoginButton onClick={this.showLoginModal}/>
      { this.state.loginVisible ? (
      <div className='loginContainer'> 
        <Login onClick={this.closeLoginModal}/>
      </div>
        ):
        null
      }
      {this.state.isLoading ?  (
        <div>Loading Posts</div>
      ) : (
(
        <div className='devlogContainer'>  
          {this.state.posts.posts.map((element:any)=>{
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
