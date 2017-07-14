import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCY6KYAguccOS66o7Vr_KZDqYaJ2KDkxJI",
            authDomain: "cloudfunctions-f34a0.firebaseapp.com",
            databaseURL: "https://cloudfunctions-f34a0.firebaseio.com",
            projectId: "cloudfunctions-f34a0",
            storageBucket: "cloudfunctions-f34a0.appspot.com",
            messagingSenderId: "993206767295"
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;