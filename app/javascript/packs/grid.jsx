import React from 'react';
import ReactTable from 'react-table';
import styles from 'react-table/react-table.css'

export default class Grid extends React.Component {
  render() {
    return <ReactTable data={this.props.data} columns={this.props.columns} />
  }
}