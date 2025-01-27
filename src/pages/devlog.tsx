import React, { Component } from 'react'
import {motion} from 'motion/react'
import DevlogPost from '../components/DevlogPost'
import "../styles/devlog.css"
import * as dotenv from 'dotenv'
import {createClient, PostgrestResponse, PostgrestSingleResponse, QueryResult} from  '@supabase/supabase-js'

type State = {
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
      isLoading: false,
      posts: []
    }
  }


  render() {
    return (
      <>
      {this.state.isLoading ? (
        <div>Loading Posts</div>
      ) : (
        <div>        
          {testData.map((entry:any)=>{return(
            <DevlogPost title={entry.post_title} text={entry.post_text} id={entry.id} dateCreated={entry.dateCreated} />
          )})
        }
        </div>
      )
      }
      </>
    )
  }
}
