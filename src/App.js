import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {
    
    state = {loggedIn:null};

    componentWillMount()    {   //lifecyle methods are automatically invoked
            firebase.initializeApp( {
            apiKey: "AIzaSyB_jHQZuiZIg3I1ZJpOk1V52tZjS-3ifNY",
            authDomain: 'authentication-8fac6.firebaseapp.com',
            databaseURL: 'https://authentication-8fac6.firebaseio.com',
            projectId: 'authentication-8fac6',
            storageBucket: 'authentication-8fac6.appspot.com',
            messagingSenderId: '573681742667'
          });

          firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn:true});
            }
            else {
                this.setState({loggedIn: false}); 
            }
          });
            
    }

    renderContent() {
      switch (this.state.loggedIn) {
          case true:
          return (
              <View>
                  <View>
                    <Header headerText="Authentication"/>
                  </View>
                <View>
                <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                </CardSection>
                  </View>
              
            </View>
            );
          case false: 
          return (
              <View>
                    <Header headerText="Authentication"/>
                    <LoginForm />
            </View>
        );
          default:
          return (
          <Spinner size="large" />
          );
      }
    }
    render() {
        return(
            <View style={{flex:1}}>
                {this.renderContent()}
            </View>
        );
    }
}
const styles= {
    headerStyle: {
    
    }
};

export default App;