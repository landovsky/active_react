import React from 'react';

export default class InputWrapper extends React.Component {
  render() { 
    return <li className="number input optional numeric">
      <label className="label">{this.props.name}</label>
      { this.props.children }
    </li>
  }
}
