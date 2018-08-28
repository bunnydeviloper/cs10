# Lesson 5: Managing App Location with React Router

### Introduction
* single page application:
  * doens't mean there's only one screen on the app
  * it means the browser doesn't need to go back to the server for new pages
    * the app download the **entire** site's contents all at once
    * this way, when you're navigating around, everything is alraedy available, and no need to refresh
  * instead JavaScript can handle the transition between pages
    * async JS requests are made for **just** the content that was repeated
  * so there's only single INITIAL page from the server
* single page apps are highly interactive, and it enable **bookmarkability**
  * b/c when you bookmarked a site, that bookmark is only a URL, it doesn't record teh state of that page
* react router is a collection of navigational components that compose declaratively with your app
* short-circuit evaluation syntax:
  ```js
  {this.state.screen === 'list' && (
    // this componet is rendered ONLY IF the first expression is TRUE
    <CreateContact />
  )}
  ```

### Dynamically render pages
* see contacts-react repo

### The BrowserRouter Component
* `npm install --save react-router-dom`
* `<BrowserRouter />`: this component will listens to changes in URL and make sure that the correct screen shows up
* example:
  ```js
  // index.js
  import { BroswerRouter } from 'react-router-dom';

  ReactDOM.render(
    <BrowserRouter><App /><BrowserRouter>,
    document.getElementById('root')
  );
  ```

### The Link Component
* 'Link' component will actually generate an anchor tag, create accessible navigation around your app
  * eg: `Link to="/about" className="about">About</Link>`
  * or (more complicated path):
    ```js
    <Link to={{
      pathname: '/courses',
      search: '?sort=name',
      hash: '#the-hash',
      state: { fromDashboard: true }
    }}>
      Courses
    </Link>
    ```

### The Route Component
* `Route path="/create" render={{ui}} />`
* Route: when the URL typed in matches the path in the Route Component, it will render that path
* Components wrapped in the Router component will render when it matches 100% or 1%+
* use 'exact' flag to set path that match 100% only

### Finishing the contact form
### Lesson Summary
### Course Outro
