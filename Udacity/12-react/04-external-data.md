# Lesson 4: Render UI with external data

### Introduction
* Lifecycle events: lifecycle events are methods in a component, which will be called at certain times (during the lifecycle of a component)
  * `componentWillMount`: invoked immediately **before** the component is **inserted** in the DOM
  * `componentDidMount`: invoked immediately **after** the component is **inserted** in the DOM
  * `componentWillUnmount`: invoked immediately **before** a component is **removed** from the DOM
  * `componentWillReceiveProps`: invoked whenever the component is **about to** receive brand new props
* `render()` is for rendering ONLY (displaying content only)
* data should not be fetched in the `render` method

### componentDidMount Lifecycle Event
  ```js
  import React, { Component } from 'react';
  import fetchUser from '../utils/UserAPI';

  class User extends Component {
    constructor(props) {
      super(props)

      this.state = {
        name: '',
        age: ''
      }
    }

    // setting state in this method will trigger a re-rendering
    componentDidMount() {
      fetchUser().then((user) => this.setState({
        name: user.name,
        age: user.age
      }))
    }

    render() {
      return (
        <div>
          <p>Name: {this.state.name}</p>
          <p>Age: {this.state.age}</p>
        </div>
      )
    }
  }

  export default User;
  ```

### Lesson Summary
