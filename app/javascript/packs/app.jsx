// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

library.add(faThumbsUp)
library.add(faThumbsDown)

function getEnum(enumName) {
  return window.enums[enumName];
}

function getData(item) {
  return window.data[item];
}

class App extends React.Component {
  render() {
    return <div style = { { width: '1200px'} }>
      <h1>Users</h1>
      <div style = { {display: 'flex'} }>
        { this.props.users.map( (user) => <Container name = { user.name } /> ) }
      </div>
    </div>

  }
}

class Container extends React.Component {
  render() {
    return <div className="blank_slate_container" style = { { minWidth: '200px'} }>
      <span className="blank_slate">
        <span>{this.props.name}</span>
        <Like />
      </span>
    </div>
  }
}

class Like extends React.Component {
  render() {
    return <div>
      <FontAwesomeIcon icon="thumbs-up" />
      <FontAwesomeIcon icon="thumbs-down" />
    </div>
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App name="React" users = { getData('users') } />,
    document.getElementById('react_app'),
  )  
})
