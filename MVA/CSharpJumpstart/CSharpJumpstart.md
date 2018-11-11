# Programming in C# Jumpstart

### OOP:
  * encapsulation: wall around your code, can export to other files, separate external (public) behavior from internal (private) implementation. C# support encapsulation via Unified Type System, Classes and Interfaces, Properties - Methods - and Events
  * inheritance: children inherits from parents (properties and methods). C# implements inheritance in 2 ways: a class may inherit from a single base class (think: one child cannot inherit from 2 moms), OR a class may implement zero or more Interfaces
  * polymorphism: to have many forms/types. In C#: a class can be used as its own type, cast to any base types or interface types it implements. Objects may methods os virtual; virtual methods may be overridden in a derived type. These are executed instead of the base implementation

### managed languages:
  * depends on services provided by a runtime environment
  * C# is one of many languages that compile into managed code
  * managed code is executed by the CLR (common language runtime)
  * CLR provides features such as: automatic memory management, exception handling, standard types, security

#### Foundational building block is a Type, which provides metadata about space allocation and metadata for compile-time type checking

#### All types have a common base: Object, hence Object defines ToString => every object has a ToString function

### 3 categories of types:
* value types: directly store values
* reference types: or objects, store a reference to data
* pointer types: only available in unsafe code

### WHY C#? -> developer productivity, solve complex tasks without compromising elegance
* var: simplified variable definition while retaining strong typing
* LINQ: language integrated query
* Lambdas: a further refinement  of anonymous methods used extensively in LINQ

### C# syntax
* based on the C & C++ syntax
* Identifiers are names of classes (Lion, Console), methods (MakeSound()), variables…
* keywords are complier reserved words ( public, class, string, get, set, void )

