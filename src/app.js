import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyCY6KYAguccOS66o7Vr_KZDqYaJ2KDkxJI",
            authDomain: "cloudfunctions-f34a0.firebaseapp.com",
            databaseURL: "https://cloudfunctions-f34a0.firebaseio.com",
            projectId: "cloudfunctions-f34a0",
            storageBucket: "cloudfunctions-f34a0.appspot.com",
            messagingSenderId: "993206767295"
        });

        firebase.auth().onAuthStateChanged((user) => {
            this.setState({ loggedIn: user !== null });
        });
    }

    renderContent() {
        switch(this.state.loggedIn) {
            case true:
                return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;