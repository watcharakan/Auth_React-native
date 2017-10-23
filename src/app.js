import React, { Component } from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button,CardSection,Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
   state = { loggedIn: null};

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
rendeerContent(){
  switch(this.state.loggedIn) {
    case true:
    return (
      <CardSection>
      <Button onPress ={()=> firebase.auth().signOut()}>
      Log Out
      </Button>
      </CardSection>

      );
    case false:
    return <LoginForm />;
    default:
    return <Spinner size ="large"/>;

   }
}

render() {
    return(
        <View>
        <Header headerText = "Auth " />
       
        {this.rendeerContent()}
        
        </View>
    	);


   }



}
export default App;