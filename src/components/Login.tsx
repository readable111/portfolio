import React, { Component } from 'react'
import '../styles/login.css'
import forge from 'node-forge'
import axios from 'axios'
import GlobalContext from './GlobalContext'


type Props = {
  email: string,
  password: string,
  input: string,
  publicKey: string,
  signup: boolean,
}



export default class Login extends Component<{ onClick: (event: React.MouseEvent) => void }, Props> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: "",
      password: "",
      input: "",
      publicKey: "",
      signup: true,
    }
    this.signup = this.signup.bind(this)
    this.submitInfo = this.submitInfo.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  static contextType = GlobalContext


  async componentDidMount(): Promise<void> {
    const response = await axios.get("http://127.0.0.1:5000/getPublicKey").then((response) => {
      return response
    }).catch((err) => {
      return err
    })

    this.setState({ publicKey: response.data.publicKey })
  }

  submitInfo = async (event: any) => {
    const { updateUser } = this.context

    const publicKeyObj = forge.pki.publicKeyFromPem(this.state.publicKey)
    try {
      const encrypted = publicKeyObj.encrypt(this.state.input, 'RSA-OAEP', { md: forge.md.sha256.create(), })

      const User = await axios.post("http://127.0.0.1:5000/login", { email: this.state.email, password: forge.util.encode64(encrypted) }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          return {
            status: response.status,
            data: response.data
          }
        }
        ).catch((error) => {
          return {
            status: error.status,
            data: error.data
          }
        })
      sessionStorage.setItem("accessToken", User.data["response"])
      updateUser(User.data["response"])
    } catch (err) {
      console.error("encryption error ", err)
    }
    this.props.onClick
  }

  signup = async (event: any) => {

    const { updateUser } = this.context

    const publicKeyObj = forge.pki.publicKeyFromPem(this.state.publicKey)
    try {
      const encrypted = publicKeyObj.encrypt(this.state.input, 'RSA-OAEP', { md: forge.md.sha256.create(), })

      const User = await axios.post("http://127.0.0.1:5000/signup", { email: this.state.email, password: forge.util.encode64(encrypted) }, { headers: { 'Content-Type': 'application/json' } })
        .then((response) => {
          return {
            status: response.status,
            data: response.data
          }
        }
        ).catch((error) => {
          return {
            status: error.status,
            data: error.data
          }
        })
      sessionStorage.setItem("accessToken", User.data["response"])
      sessionStorage.setItem("isLoggedIn", "true")
      updateUser(User.data["response"])
    } catch (err) {
      console.error("encryptiopn error ", err)
    }
    this.props.onClick
  }

  handlePasswordChange = (event: any) => {
    this.setState({ input: event.target.value })
  }


  handleEmailChange = (event: any) => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <>
        {this.state.signup ? (
          <div className='inputContainer'>
            <button className="closeButton" onClick={this.props.onClick}>Close</button>
            <label className='inputLabel'>Email:</label>
            <input className='inputLabel' type='text' id='email' onChange={this.handleEmailChange} value={this.state.email}></input>
            <label className='inputLabel'>Password:</label>
            <input className='inputLabel' type='password' id='password' onChange={this.handlePasswordChange} value={this.state.input}></input>
            <button className='confirmButton' onClick={this.signup}>Sign Up</button>
            <button onClick={() => this.setState({ signup: false })}>Already a user? Log in here</button>
          </div >)
          : (
            <div className='inputContainer'>
              <button className='closeButton' onClick={this.props.onClick}>Close</button>
              <label className='inputLabel'>Email:</label>
              <input className='inputLabel' type='text' id='email' onChange={this.handleEmailChange} value={this.state.email}></input>
              <label className='inputLabel'>Password:</label>
              <input className='inputLabel' type='password' id='password' onChange={this.handlePasswordChange} value={this.state.input}></input>
              <button className='confirmButton' onClick={this.submitInfo}>Login</button>
              <button onClick={() => this.setState({ signup: true })}>New User? sign up here</button>
            </div >
          )
        }
      </>
    )
  }
}
