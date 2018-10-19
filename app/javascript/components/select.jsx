import React from 'react';

export default class Select extends React.Component {
  render() { 
    return <select name={this.props.name}>
      { this.props.children }
    </select>
  }
}
