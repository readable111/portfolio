import React, { Component } from 'react'
import forge from 'node-forge'
import axios from 'axios'


type Props = {
    email: string,
    password:string,
    input: string,
    publicKey: string,
    signup: boolean,
}



export default class Login extends Component <{},Props>{
    constructor(props:any){
        super(props)
        this.state = {
            email: "",
            password:"",
            input:"", 
            publicKey:"",
            signup: true
        }
        this.signup = this.signup.bind(this)
        this.submitInfo = this.submitInfo.bind(this)
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }

    submitInfo = async (event:any) =>{
        const response = await axios.get("http://127.0.0.1:5000/getPublicKey").then((response)=>{
            return response
        }).catch((err)=>{
            return err
        })

        this.setState({publicKey: response.data.publicKey})

        const publicKeyObj = forge.pki.publicKeyFromPem(this.state.publicKey)
        try{
        const encrypted = publicKeyObj.encrypt(this.state.input, 'RSA-OAEP', {md:forge.md.sha256.create(),}) 

        return await axios.post("http://127.0.0.1:5000/login",{email: this.state.email, password:forge.util.encode64(encrypted) }, {headers:{'Content-Type': 'application/json'}})
            .then((response) =>{
                console.log(response)
                return{
                    status: response.status,
                    data: response.data
                }
            }
        ).catch((error)=>{
                return{
                    status: error.status,
                    data: error.data
                }
            })
        }catch(err){
            console.error("encryptiopn error ", err)
        }

    }

    signup = async (event:any) =>{
        const response = await axios.get("http://127.0.0.1:5000/getPublicKey").then((response)=>{
            return response
        }).catch((err)=>{
            return err
        })

        this.setState({publicKey: response.data.publicKey})

        const publicKeyObj = forge.pki.publicKeyFromPem(this.state.publicKey)
        try{
        const encrypted = publicKeyObj.encrypt(this.state.input, 'RSA-OAEP', {md:forge.md.sha256.create(),}) 

        return await axios.post("http://127.0.0.1:5000/signup",{email: this.state.email, password:forge.util.encode64(encrypted) }, {headers:{'Content-Type': 'application/json'}})
            .then((response) =>{
                console.log(response)
                return{
                    status: response.status,
                    data: response.data
                }
            }
        ).catch((error)=>{
                return{
                    status: error.status,
                    data: error.data
                }
            })
        }catch(err){
            console.error("encryptiopn error ", err)
        }

    }
    
    handlePasswordChange = (event:any) =>{
        this.setState({input: event.target.value})
    }


    handleEmailChange = (event:any) =>{
        this.setState({email: event.target.value})
    }

  render() {
    return (
        <>
        { this.state.signup ? (
        <div className='inputContainer'>
            <button onClick={()=>this.setState({signup:false})}>Already a user? Log in here</button>
            <label>Email:</label>
            <input type='text' id='email' onChange={this.handleEmailChange} value={this.state.email}></input>
            <input type= 'password' id='password' onChange={this.handlePasswordChange} value={this.state.input}></input>
            <button onClick={this.signup}>Sign Up</button>
        </div>)
        : ( 
        <div className='inputContainer'>
            <button onClick={()=>this.setState({signup:true})}>New User? sign up here</button>
            <label>Email:</label>
            <input type='text' id='email' onChange={this.handleEmailChange} value={this.state.email}></input>
            <input type= 'password' id='password' onChange={this.handlePasswordChange} value={this.state.input}></input>
            <button onClick={this.submitInfo}>Login</button>
        </div>

        )
        }

        </>
    )
  }
}
