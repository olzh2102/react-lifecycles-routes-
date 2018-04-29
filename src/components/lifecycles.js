import React, { Component } from 'react';

class Life extends Component {
  // 1. Get default props

  // 2. Set default state
  state = {
    title: 'Life cycles'
  }

  // 3. Before render JSX
  componentWillMount() {
    console.log('3. before render');
  }

  componentWillUpdate() {
    console.log('before update');
  }

  componentDidUpdate() {
    console.log('after update');
  }

  // 4. Render JSX
  render() {
    console.log('RENDER');
    return (
      <div>
        <h3>{this.state.title}</h3>
        <div onClick={() => this.setState({title: 'smth else'})}>CLICK TO CHANGE</div>
      </div>
    );
  }

  // 5. After render JSX
  componentDidMount() {
    console.log('5. after render');
  }
}

export default Life;