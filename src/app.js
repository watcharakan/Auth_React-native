import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
   state = { loggedIn: false};

	componentWillMount() {
	firebase.initializeApp({
    apiKey: 'AIzaSyBD0CWFUosNDYY94JGmtANpWviOE6bswmQ',
    authDomain: 'authen-b7a29.firebaseapp.com',
    databaseURL: 'https://authen-b7a29.firebaseio.com',
    projectId: 'authen-b7a29',
    storageBucket: 'authen-b7a29.appspot.com',
    messagingSenderId: '541051663658'
  });

 firebase.auth().onAuthStateChanged((user) =>{
   if(user){
     this.setState({loggedIn: true});
   } else {
     this.setState({loggedIn: false});
   }

 });

}
rendeerContent()
{
if(this.setState.loggedIn)
{
return(
  <Button>
    Log out
  </Button>

  );

}
return <LoginForm />;

}

render() {
    return(
        <View>
        <Header headerText = "Auth" />
        {this.rendeerContent()}
        </View>


    	);


   }



}
export default App;