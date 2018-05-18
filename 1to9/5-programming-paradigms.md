## The beauty and joy of computing (BJC)  
**Dan Garcia**

# Lecture 5
## Programming Paradigms

**Programming Paradigms**: a way of classify the style of programming
- computation is the evaluation of functions
- Imperative Programming: = sequential programming, series of steps  
(assignment allowed, mutation allowed (eg num = num + 2), order matters)

Quiz: which of the following is true?
a) Functional-style code is actually imperative-style code
b) Imperative-styles code is actually functional-style code
c) a and b are true
d) neither a nor b is true
Correct = A

**Object-oriented Programming (OOP)**
- Objects as data structures: with methods (behavious) you ask of them, and local state (properties, attributes) to remmember
- Classes (factory) and instances: instance an example of class
- Inheritance saves code: hierachical classes
- OOP Example: Sketchpad, Dr. Ivan Sutherland (father of computer graphics)

Quiz: which of the following is true?
a) Objects can only delete other objects
b) Objects can only contain other objects
c) Objects can both delete and contain other objects
d) Objects can neither delte or contain other objects, they can only send messages to them.
Correct = C

**Declarative Programming** (this is like magic)
- Express WHAT computation desired w/o specifying HOW it carries it out
- Often a series of assertions and queries
- Sub-categories: logic, constraint

- Most languages are hybrids => multi-paradigm languages

Quiz: Of 4 paradigms, what's the most powerful?
A) Functional: evaluating and expression and use the resulting value for something
B) Imperative: first do this and then do that
C) OOP: send messages b/w objects to simulate the temporal evolution of a set of real world phenomena
D) Declarative: answer a question via search for a solution
E) All equally powerful
Correct: E

- Paradigms vary in eficiency, scalability, overhead, fun, "how" vs "what" to specify, etc...
