import React from 'react';
import ReactDOM from 'react-dom';

// note: another way to write:
// import React, { Component } from 'react';
// class ContactList extends Component {...}

class ContactList extends React.Component {
  render() {
    const people = [
      {name: 'Michael'},
      {name: 'Sophia'},
      {name: 'Jack'}
    ];

    return (<ol>
      {people.map(person => {
        <li key={person.name}>{person.name}</li>
      })}
      </ol>
    )}
}

ReactDOM.render(
  <ContactList />,
  document.getElementById('root')
)
