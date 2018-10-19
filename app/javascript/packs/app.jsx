// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import Grid from 'components/grid';
import Form from 'components/form';

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
    const columns = [
      { Header: 'Title', accessor: 'title' },
      { Header: 'Comment', accessor: 'comment' },
      { Header: 'Due at', accessor: 'due_at'},
    ]

    return <div style = { { width: '1200px'} }>
      <h2>Users</h2>
      <Form />
      <Grid columns={columns} data={this.props.data.data} />
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
    <App name="React" data = { getData('tasks') } />,
    document.getElementById('react_app'),
  )  
})
