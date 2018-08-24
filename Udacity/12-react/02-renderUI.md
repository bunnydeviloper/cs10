# Lesson 2: Rendering UI with React

### Rendering UI Intro
* instead of using string template (`<div>...</div`), React uses JS objects to build user interface
* components are custom elements to neatly encapsulate and group behaviors

### Creating Elements and JSX
* Apps built with React typically have a single `root` DOM node (`<div id="root"></div>`)
  ```js
  import React from 'react';
  import ReactDOM from 'react-dom';

  // first arg is DOM tag name
  // second argument is an object that holds the properties we want to give to the DOM node
  // third arg is the content of the DOM node
  const element = React.createElement('div', {
    className: "welcome-message" // 'class' is not valid DOM property, 'className' is
  }, 'Hello World');

  // note: createElement returns a plain JavaScript object, describe DOM node (VirtualDom)
  // then ReactDOM convert virtualDom into real DOM nodes and valid HTML

  ReactDOm.render(
    element,
    document.getElementById('root');
  );
  ```
* VirtualDom: objects that describe real DOM nodes
* some attributes are allow such as: id, accessKey, poster, marginWidth...
* You have to use `htmlFor` instead of `for` b/c 'for' is a reserved word in JavaScript
* Nested elements:
  ```js
  const element = React.createElement('ol', null,
    React.createElement('li', null, 'First in list'),
    React.createElement('li', null, 'Second in list'),
    React.createElement('li', null, 'Third in list')
  );
  ```
* Map over an array:
  ```js
  const people = [
    {name: 'Michael'},
    {name: 'Sophia'},
    {name: 'Jack'}
  ];
  const element = React.createElement('ol', null,
    people.map((person, index) => {
      React.createElement('li', {key: index}, person.name);
    });
  );
  ```
* JSX is a syntax extension of JavaScript, that lets us write `<html>{JS code inside}</html>`
  ```js
  const element = <ol>
    {people.map(person => {
      <li key={person.name}>{person.name}</li>
    })}
  </ol>
  ```

### Create React App
### Composing with components
### Renndering UI Outro

