# Lesson 1: Why React?

### Introduction
### What is composition?
* composition: is to combine simple functions to build more complicated ones
* in react, we composing one function to get some UI, instead of some value
  ```js
  function ProfileLink (username) {
    return 'https://github.com/' + username;
  }
  function ProfilePic (username) {
    return 'https://github.com/' + username + '.png?size=200';
  }

  function Profile (username) {
    return (
      <div classname="profile">
        <ProfilePic username="username" />
        <ProfileLink username="username" />
      </div>
    );
  }
  ```
* A good function should follow the "DOT" - do one thing - rule
* React page:
    <Page>
      <Profile />
      <Article />
      <Sidebar />
    </Page>

### What is Declarative Code?
* Imperative code: expressing a command, what and how (eg: manually change the airflow and fan to keep it cool)
* Declarative code: (eg: set thermostat to cool mode, let it handle the rest)
* Another example is `for loop` (imperative) vs `map` (declarative)
* React is declarative
  `<button onClick={activateTeleporter}>Activate Teleporter</button>`

### Unidirectional Data Flow
### React is "just JavaScript"
### Lesson Summary
