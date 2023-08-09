import { Component } from 'react';

class FormikEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {}
    };
  }

  componentWillReceiveProps(prevProps) {
    console.log(this.state.values);
    const prevState = prevProps.formikProps;
    const nextState = this.state;
    this.props.didUpdate(prevState, nextState);
    this.setState({
      values: prevProps.formikProps.values
    });
  }

  // componentDidUpdate(prevState, prevProps) {
  //   console.log('prevState', prevState.values.name, prevProps.values.name);
  //   // console.log(this.state);
  //   this.props.didUpdate(prevProps);
  // }

  render() {
    return null;
  }
}
export default FormikEffect;
