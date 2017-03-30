
class Hello extends React.Component {
   componentWillMount() {
      console.log('Component DID MOUNT!');
   }

  render() {
    return React.createElement('div', null, `Hello ${this.props.toWhat}`);
  }
}


