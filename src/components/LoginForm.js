import React, { Component } from 'react';
import { Button, Input, Card, CardSection } from './common';

class LoginForm extends Component {
  state = { text: ''};

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="john@doe.com"
            label="E-mail"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="E-mail"
            value={this.state.text}
            onChangeText={text => this.setState({ text })} />
        </CardSection>

        <CardSection>
          <Button>
            Log in
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;