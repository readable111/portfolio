import React, { Component } from 'react'
import backArrow from "../assets/arrow_back.png"
import "../styles/topBanner.css"
import { Link } from 'react-router'

type Props={
  name: string;
}


export default class TopBanner extends Component<Props> {


  constructor(props){
    super(props);
  }


  
  render() {
    return (
        <div className='container'>
            <div className='img' >
              <Link to='/'>
              <img src={backArrow}></img>
              </Link>
            </div>
            <p className='text'>{this.props.name}</p>
        </div>
    )
  }
}
