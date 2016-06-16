import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      console.log(this.props.authenticated)
      if(!this.props.authenticated) {
        browserHistory.push('/')
      }
    }

    componentWillUpdate(nextProps) {
      console.log(this.props.authenticated)
      if(!nextProps.authenticated) {
        browserHistory.push('/')
      }
    }

    render() {
      console.log(this.props.authenticated)
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {authenticated: state.authenticate}
  }
  return connect(mapStateToProps)(Authentication)
}
