import React, { Component } from 'react'
import {motion} from 'motion/react'
import DevlogPost from '../components/DevlogPost'
import Login from '../components/Login'
import "../styles/devlog.css"
import * as dotenv from 'dotenv'
import {createClient, PostgrestResponse, PostgrestSingleResponse, QueryResult} from  '@supabase/supabase-js'
import LoginButton from '../components/LoginButton'

type State = {
  loginVisible:boolean,
  isLoading:boolean,
  posts: any
}

const testData = [
  {
    post_title: "test Titel",
    post_text: "test Text",
    id: 123,
    created_at:"2025-01-20"
 },
  {
    post_title: "test Titel",
    post_text: "test Text",
    id: 123,
    created_at:"2025-01-20"
  }, 
  {
    post_title: "test Titel",
    post_text: "test Text",
    id: 123,
    created_at:"2025-01-20"
  }
]



export default class Devlog extends Component<{},State> {
  constructor(props:any){
    super(props)
    this.state={
      loginVisible: false,
      isLoading: false,
      posts: []
    }
    this.showLoginModal = this.showLoginModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
  }

  closeLoginModal = () =>{
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
        <Login/>
      </div>
        ): 
  (null)
      }
      {this.state.isLoading ? (
        <div>Loading Posts</div>
      ) : (
        <div className='devlogContainer'>        
          {testData.map((entry:any)=>{return(
            <DevlogPost title={entry.post_title} text={entry.post_text} id={entry.id} dateCreated={entry.dateCreated} />
          )})
        }
        </div>
      )
      }
      </div>
    )
  }
}
