# Lesson 8: Features of single page apps

### Welcome
### How to be successful
* framework enables u to built complicated projects with ease
* framework are built for working with teams, helps you get up and running quickly, while maintaining code consistency and quality

### Quiz: Explore a front end application
* Frameworks need to:
  * maintain HTML chunks
  * DOM manipulation
  * data processing
  * handle user interaction

### Server-based and AJAX powered sites
* Highly interactive app, an app that updates frequently, should most likely be a client-side app
* static page should be a server-side app

### Quiz: server and client apps
### Single page apps
* single page contains its own UI and logic
* model, view, controller

### Frameworks
* KIS: keep it simple
* DRY: don't repeat yourself

### Core Framework Components
* about choosing a framework: choose the best fit for the job, best support your needs, move the fastest with

### Code and File organization
### Quiz: templates, URLs, and events
* Frameworks provide templates, URL management, and event handling (click, change...)
* these are the View and the Controller

### Storage - the absent component?
* Model Data

### Features of specialized frameworks
* some frameworks let you create your own custom elements
  ```html
  <user-bio>
    <h3>Sophia</h3>
    <img src="img/sophia_profile.jpg" alt="profile picture">
    <P>Sophia is a developer...</p>
  </user-bio>
  ```
* when the app's data changes, the template (and therefore the DOM) needs to change.
* DOM insertion and manipulation is an extremely slow process, hence => virtual DOM
* virtual DOM is created in memory, and perform all of the necessary updates or deletions
* then compare with real DOM amd replace the existing content
* FULLSTACK framework: live on both the client and the server, it can handle things like data streaming
* eg: Meteor uses web sockets to keep an open connection between client and server, which provide faster communication and smoother ux

### Interview with Dhruv
* frameworks help you get the fundamental design patterns of the web quickly
* diff fw can come from different paradigm, with diff philosophy about how to do things
* many fws have lots of common things, and if you know one, u get the guiding principles/ideas behind the others
* knowing another fw helps you evaluate how you are doing with one, what's unique and appealing to developers, and understanding the tradeoff that came with it
* look at the community that's using it and see where it's going
* not all fw are perfect, learn the history and understand why things was developed a certain ways

### Outro
