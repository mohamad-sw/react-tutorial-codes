import React, { Component } from 'react';
import axios from 'axios';
import Input from './input';

class Login extends React.Component {
  state ={
    account: {
      email: '',
      password: ''
    }
  }
  handleSubmit = async (e)=>{
    e.preventDefault();
  }

  handleChange = async ({currentTarget: input})=>{
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});

  }

  render() { 
    const {email,password} = this.state.account;
    return (
    <form onSubmit={this.handleSubmit}>
      <Input name='email' value={email} label='Email' onChange={this.handleChange} />
      <Input name='password' value={password} label='Password' onChange={this.handleChange} />
      <button className="btn btn-primary">Login</button>
    </form>)
  }
}
 
export default Login;