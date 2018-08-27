# Lesson 4: Render UI with external data

### Introduction
* Lifecycle events: lifecycle events are methods in a component, which will be called at certain times (during the lifecycle of a component)
  * `componentWillMount`: invoked immediately **before** the component is **inserted** in the DOM
  * `componentDidMount`: invoked immediately **after** the component is **inserted** in the DOM
    * AJAX requests should ONLY be made in the componentDidMount lifecycle method
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
* Why shouldn't you make Ajax requests in the render method?
  * B/C: `render()` method should be a 'pure function'
  * B/C: you don't have complete control over when the `render()` method will be invoked
  * The `render()` method should take in input via props, and return a description of your UI(JSX), nothing else

### Lesson Summary
