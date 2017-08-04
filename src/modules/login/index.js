import React, { Component } from 'react';

class Login extends Component{
    render(){
      return(
        <div className="wrapper">
          <input type="text" placeholder="username"/>
          <input type="submit"/>
        </div>
      );
    }
}

export default Login;