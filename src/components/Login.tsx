import React, { Component } from 'react'
import {JSEncrypt} from 'jsencrypt'
import dotenv from 'dotenv'


dotenv.config()

type Props = {
    email: string,
    password:string,
}

const jsEncrypt = new JSEncrypt()
jsEncrypt.setPublicKey(process.env.PUBLIC_KEY as string)

export default class Login extends Component <{},Props>{
    constructor(props:any){
        super(props)
        this.state = {
            email: "",
            password:""
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    handlePasswordChange = (event:any) =>{
        this.setState({password: (jsEncrypt.encrypt(event.target.value)) as string})
    }


    handleEmailChange = (event:any) =>{
        this.setState({email: event.target.value})
        //call backend user auth thing here
    }

  render() {
    return (
        <div className='inputContainer'>
            <label>Email:</label>
            <input type='text' id='email' onChange={this.handleEmailChange} value={this.state.email}></input>
            <input type='text' id='password' onChange={this.handlePasswordChange} value={this.state.password}></input>
        </div>
    )
  }
}
