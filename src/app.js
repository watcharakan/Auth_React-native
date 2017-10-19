import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
	firebase.initializeApp({
    apiKey: 'AIzaSyBD0CWFUosNDYY94JGmtANpWviOE6bswmQ',
    authDomain: 'authen-b7a29.firebaseapp.com',
    databaseURL: 'https://authen-b7a29.firebaseio.com',
    projectId: 'authen-b7a29',
    storageBucket: 'authen-b7a29.appspot.com',
    messagingSenderId: '541051663658'
  });
	}
   render() {
    return(
        <View>
        <Header headerText = "Auth" />
         <LoginForm/>
        </View>


    	);


   }



}
export default App;