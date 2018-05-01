import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Login from 'components/login/login';
import Register from 'components/login/register';

const style = {
  margin: 15,
};
export default class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      loginScreen:[],
      loginMessage:'',
      buttonLabel:'Register',
      isLogin:true
    }
  }
  componentWillMount(){
    let loginScreen=[];
    loginScreen.push(<Login />);
    let loginMessage = 'Not registered yet, Register Now';
    this.setState({
      loginScreen:loginScreen,
      loginMessage:loginMessage
    })
  }

  handleClick(){
    let loginScreen = []
    if(this.state.isLogin){
      loginScreen.push(<Register />)
      let loginMessage = 'Already Registered, Login now'
      this.setState({
        loginScreen : loginScreen,
        loginMessage: loginMessage,
        buttonLabel : 'Login',
        isLogin     : false
      })  
    } else {
      loginScreen.push(<Login />)
      let loginMessage = 'Not registered yet, Register Now'
      this.setState({
        loginScreen : loginScreen,
        loginMessage: loginMessage,
        buttonLabel : 'Register'
      })
    }
    
  }

  render() {
    return (
      <div className="loginScreen">
        {this.state.loginScreen}
        <div>
          {this.state.loginMessage}
          <MuiThemeProvider>
            <div>
               <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={() => this.handleClick()}/>
           </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}