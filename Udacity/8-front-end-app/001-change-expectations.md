# Lesson 1 - Changing expectations

### Welcome
### Introduce Cat Clicker and Andy
### Cat Clickers requriements
### Quiz: reflections
### Andy's reflections
### Requirements change all the time
* checkout folder catClicker to see project
* requirement changes all the time mainly b/c projects keep evolving, new ideas, new rules...

### First requirements change
### Chat clicker requirements 2
### Quiz: reflections 2
### Andy's reflections 2

### Closures and event listeners
* see 001-ex.js

### Second requirements change
### Cat clicker premium requirements
### Quiz: reflections 3
### Andy's reflections 3

### Spaghetti code story time
* you need to learn organizational technique, so that:
  * your apps are stable and bug-free
  * your apps are cleanly written
  * your apps scale very well and are extensible

### What is spagehetti code
* things get really ugly when you start connecting things together, you can't move things around anymore
* concept land: not think about code
  * example: how to connect the phones together
  * equation: #lines = (n * (n-1)) / 2, n is the number of phones, think if n=2000, it's disaster
  * solution: we build a hub, and every phone connect to it

### Indtroduction to MVO
* when writing application: we need separation of concern
  * M: model, this is where all the data is stored (from server and from users)
    * eg: the array of calendar events in the application
  * V: view, all the things users see and interact with
    * DOM elements, input elements, buttons, videos and images
    * eg: the render function for the calendar area
  * O: octopus, connects and M and the V, allow changes for individual pieces w/o upsetting the rest
    * eg: the functions that adds a URL from the URL array (from M) to the list to display
* other types of MVO (fundamentally solving the same thing):
  * MVC - model view controller
  * MVVM - model view view model
  * MVP - model view presenter
  * MV * - model view *whatever*

### Quiz: model quiz
### Quiz: view quiz
### What is the model in our code

### What is the view in our code
### What is the octopus in our code
### Identify the MVO in New App
### Explore the App's Structure
### Quiz: where should this feature Live?
### Quiz: implement note date
### Segue into L2
