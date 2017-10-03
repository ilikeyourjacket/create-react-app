import React, { Component } from 'react';

const ButtonStyles = {
    backgroundColor: '#ccc',
    border: '1px solid black',
    color: 'white',
    height: 50,
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

export default class Button extends Component {
    render() {
        return <div style={ButtonStyles}>{this.props.children}</div>;
    }
}
