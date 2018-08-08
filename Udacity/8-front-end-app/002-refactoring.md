# Lesson 2: Refactoring with separation of concerns

### Introduction to lesson 2
### Quiz: Identify model and view
* Model: array of cat objects
* View: clickable list of cats
* View: current cat display

### Review model and view for CC Premium
### Identify octopus
### Quiz: Andy's code 1
* HOw is Andy displaying the cat when you click each of the buttons at the top?
  * Replacing DOM elements in a single view with the info for each clicked cat - NO
  * Keepng a separate biew for eah cat, and showing/hiding them - YES, although this is okay, but it's not optimal, imagine if we have about 10000 cats, that means we have to create 10000 nodes and that's overkill
  * also, about looping through all cats and tryna hide them, if you have a bug in your code, and two of the cats are shown, then there's a problem

### Quiz: Andy's code 2
* Andy is storing all the data in the DOM, that means he can't effectively separate his model and view from each other

### In defense of Andy
### Rebuild Cat Clicker Premium
### Quiz: Cat clicker premium specs

### Cat clicker premium solution
### Cat clicker Premium solution Revision
### Cat Clicker Premium pro
### Cat clicker premium pro specs
### How to modernize projects
* when you organize things well, it's much easier to add things later
* separation of concern is great if you do it well
* however, every organization has legacy code (code that has been there for forever), so we need to make these code up-to-date

### Interview with Nic
* Refactoring: a process in which you take a piece of code, and make it more readable, more maintainable without changing its functionality.
  * breakup large or complicated functions without changing the way they are accessed by the outside world

### Interview with Jacques

### Refactor Spaghetti code
### Repository for attendance app
### Quiz: what method did you use?
### Interview with the Author
### Refactoring the resume
### Repository information for resume
### Segue into L3
