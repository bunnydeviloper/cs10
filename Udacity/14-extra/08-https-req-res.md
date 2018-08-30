# Lesson 8: HTTP's Request/Response Cycle

### Intro
### HTTP Requests
### HTTP Requests 2
### Fetching a single request
### Fetching a single request 2
### Getting multiple requests
### Exercise setup
### Quiz: DevTools quiz
### Sending data with a POST request
### From XHR to fetch
### Quiz: fetch quiz
```js
fetch('password.txt', {
  'method': 'PUT',
  'headers': {
    'X-Udacity-Exercise': 'fetch rocks!'
  }
}).then(function (response) {
  return response.text();
}).then(function (data) {
  console.log(data);
});

// returns a promise and console.log the password
```

### Outro
