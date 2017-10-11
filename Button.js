import React from 'react';
import { StyleSheet, Text, VrButton } from 'react-vr';

class Button extends React.Component {
  constructor() {
    super();
    this.styles = StyleSheet.create({
      button: {
        margin: 0.05,
        height: 0.4,
        backgroundColor: '#000',
        opacity: 0.5,
        borderRadius: 50,
      },
      text: { fontSize: 0.3, textAlign: 'center' },
    });
  }
  render() {
    return (
      <VrButton
        style={this.styles.button}
        onClick={e => this.props.handleClick(e)}
      >
        <Text style={this.styles.text}> {this.props.text} </Text>
      </VrButton>
    );
  }
}

export default Button;
