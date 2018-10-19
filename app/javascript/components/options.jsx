import React from 'react';

export default class Options extends React.Component {
  render() { 
    const options = []

    Object.keys(this.props.enums).map( (key) => {
      options.push(<option key={key} value={this.props.enums[key]}>{key}</option>)
    });

    return options
  }
}
