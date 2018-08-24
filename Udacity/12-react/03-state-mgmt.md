# Lesson 3: State Management

### Introduction
* props: allow data to pass into your component
* functional component: an alternative way to create components
* controlled component: allow you to hook up the forms in your application to your component state

### Pass Data with props
* passing props into components is like passing arguments into functions
* access a component's props with `this.props` (or `props` with stateless functional components)
* `Clock currentTiem={new Date().getTime()} />`
* passing multiple props: `<Clock time={Date.now()} zone="MST" />`

### Functional components
* functional component is defining components with regular fn, instead of classes
* stateless functional components:
  * function takes in props as arguments
  * returns descripton of UI
  * no 'this' keyword
  * used when all the component needs is a `render` method
  * and when your component does not need to keep track of internal state
  ```js
  function ListContacts (props) { // notice you're passing in 'props' here
    return (
      <ol className='contact-list'>
        {props.contacts.map((contact) => ( // notice we're no  longer using 'this' keyword
          <li key={contact.id} className='contact-list-item'>
            <div className='contact-avatar' style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}/>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.email}</p>
            </div>
            <button className='contact-remove'>
              Remove
            </button>
          </li>
        ))}
      </ol>
    )
  }
  ```

### Add state to a component
* props represent 'read-only' data that are **immutable**
* a component's `state` represent **mutable** data (can be change, and affect what is rendered on the page))
  * `state` is managed internally by the component itself
  * change due to user input (click on button, type in input...)
* Reconciliation: determining what has changed in the previous and new outputs

### Update state with setState
* you should never mutating the state directly, b/c React will not re-render UI, hence use setState()
  ```js
  // setState by passing in a function (used when the new state depends on prev state)
  // setState here is asynchronous
  this.setState((prevState) => ({
    count: prevState.count + 1
  }))

  // setState by passing in an object, which will be merged with the prevState's object
  this.setState({
    username: 'Tyler'
  })
  ```
* in React, your UI is just a 'function' of your 'state'

### PropTypes
* `npm install --save prop-types` or `yarn add prop-types`
* PropTypes is a way to validate intended data in our React app
  * helps us identify bugs during development

### Controlled components


### Lesson Summary
