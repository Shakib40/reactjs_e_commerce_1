import React, { Component } from 'react';

class FormikEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState);
    this.props.didUpdate(prevProps, this.props);
  }
  render() {
    return null;
  }
}
export default FormikEffect;