import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner }  from './common'; 
import firebase from 'firebase';

class LoginForm extends Component {
    state = {email:'', password: '', error:'', loading: false };

    onButtonPress() {
        const {email, password } = this.state;
        this.setState({ error: '', loading: true} );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( this.onLoginSucess.bind(this) )      //we might need this method afterwards therefore are we binding it 
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( this.onLoginSucess.bind(this) )
            .catch(this.onLoginFail.bind(this)) 
        });
    }

    onLoginSucess() {
        this.setState({
            email: '',
            password: '',
            loading:false,
            error:''
        }); 
    }
    
    onLoginFail() {
        this.setState({
            error:"Authentication Failed",
            loading: false

        })
    }
    renderButton() {
        if(this.state.loading) {    //default value of loading is true hence we are not writting "==true"
            return <Spinner size="small" />
        }
        return (
            <Button 
            onPress={this.onButtonPress.bind(this)}         //we bind th emethod becoz it it he called at some time in the future 
            > 
                Log in
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                     label= "Email"
                     placeholder="user@gmail.com"
                     value = {this.state.email}
                     onChangeText = {email => this.setState({ email })}
                    />
                </CardSection>  

                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="password"
                    label="Password"
                    value={this.state.password}
                    onChangeText = {password => this.setState({ password })}
                    />
                </CardSection>

                <Text style = {styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                   {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles= {
    errorTextStyle: {
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};
export default LoginForm;