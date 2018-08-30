/*
Grabbing a few inputs to help you get started...
 */
const firstPasswordInput = document.querySelector('#first');
const secondPasswordInput = document.querySelector('#second');
const submit = document.querySelector('#submit');

/*
Your code goes here!
 */
// using IssueTracker to help format the validation message:
function IssueTracker() {
  this.issues = [];
}

IssueTracker.prototype = {
  add: function (issue) {
    this.issues.push(issue);
  },
  retrieve: function () {
    let message = "";
    switch (this.issues.length) {
      case 0:
        // do nothing because message is already ""
        break;
      case 1:
        message = "Please correct the following issues:\n" + this.issues[0];
        break;
      default:
        message = "Please correct the following issues:\n" + this.issues.join("\n");
        break;
    }
    return message;
  }
};
/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
You'll probably find this function useful...
 */
submit.onclick = function () {
  // grab the input's value
  const firstPw = firstPasswordInput.value;
  const secondPw = secondPasswordInput.value;

  // make an issue tracker for each input because some validation messages should
  // end up on the first one, some on the second
  const firstInputIssuesTracker = new IssueTracker();
  const secondInputIssuesTracker = new IssueTracker();

  // this function steps through all of the requirements and add messages when a requirement fails
  // just need to check the first password input b/c the 2nd should be the same
  function checkRequirements() {
    if (firstPw.length < 16) {
      firstInputIssuesTracker.add("less than 16 characters");
    } else if (firstPw.length > 100) {
      firstInputIssuesTracker.add("greater than 100 characters");
    }
    if (!firstPw.match(/[\!\@\#\$\%\^\&\*]/g)) {
      firstInputIssuesTracker.add(`missing a symbol (!, @, #, $, %, ^, &, *)`);
    }
    if (!firstPw.match(/\d/g)) {
      firstInputIssuesTracker.add("missing a number");
    }
    if (!firstPw.match(/[a-z]/g)) {
      firstInputIssuesTracker.add("missing a lowercase letter");
    }
    if (!firstPw.match(/[A-Z]/g)) {
      firstInputIssuesTracker.add("missing a uppercase letter");
    }
    const illegalCharacterGroup = firstPw.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);
    if (illegalCharacterGroup) {
      illegalChracterroup.forEach(function (illegalChar) {
        firstInputIssuesTracker.add("includes illegal character: " + illegalChar);
      });
    }
  }

  // here's the first validation check, gotta make sure they match
  if (firstPw === secondPw && firstPw.length > 0) {
    // they match, so make sure the rest of the requirements have been met
    checkRequirements();
  } else {
    secondInputIssuesTracker.add("Passwords must match!");
  }

  // get the validation message strings after all the requirements have been checked
  const firstInputIssues = firstInputIssuesTracker.retrieve();
  const secondInputIssues = secondInputIssuesTracker.retrieve();

  // let input.setCustomValidity() do its magic :)
  firstPasswordInput.setCustomValidity(firstInputIssues);
  secondPasswordInput.setCustomValidity(secondInputIssues);

  if (firstInputIssues.length + secondInputIssues.length === 0) {
    alert('Password change successful!');
  }
};
