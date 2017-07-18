import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Input, Card, CardSection, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false};

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false, 
      error: ''
    });
  }

  onLoginFail(message) {
    this.setState({ 
      loading: false, 
      error: message.toString()
    });
  }

  renderButton() {
    if(this.state.loading) {
      return <Spinner size="small" />
    } 

    return <Button onPress={this.onButtonPress.bind(this)}> Log in </Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="john@doe.com"
            label="E-mail"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder="password"
            label="Password"
            secureTextEntry
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}

export default LoginForm;