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

  // note: createElement returns a plain JavaScript object, describe DOM node
  // then ReactDOM convert this object into valid HTML

  ReactDOm.render(
    element,
    document.getElementById('root');
  );
  ```
* VirtualDom: objects that describe real DOM nodes

### Create React App
### Composing with components
### Renndering UI Outro

