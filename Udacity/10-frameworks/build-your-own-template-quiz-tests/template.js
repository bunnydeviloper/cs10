// Create your own `template` function:
//
// • the `template` function should accept
//    1. a string of the template to parse
//    2. an `options` object for custom delimiters
//        - an `open` property for the open delimiter
//        - a `close` property for the close delimiter
// • the default delimiters the `template` function should use are:
//    1. `*(` for the opening delimiter
//    2. `)*` for the closing delimiter
// • the `template` function should return a function
// • the returned function should accept:
//    1. one argument for each placeholder in the original string
//    2. a number - this is how many times the string should be logged to the console
//
// EXAMPLE:
// in the example below `*(` is my default opening delimiter and `)*` is the default closing delimiter
// var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
// var logResult = template( string );
// logResult( 'love', 'ice cream', 2 ); // logs the message "Hi, my name is Richard. And I love this ice cream!", twice
//
//
// var string = "Is <<! thing !>> healthy to <<! action !>>?";
// var logResult = template( string, {open: '<<!', close: '!>>'} );
// logResult( 'ice cream', 'consume', 7 ); // logs the message "Is ice cream healthy to consume?", seven times
//
//
// Now it's your turn!

function template(text, options) {
  const delimiter = {
    open: '*(',
    close: ')*',
  };

  const wrapInQuotes = function(text) {
    return "'" + text + "'";
  };

  // update the custom delimiters with any default ones
  for (let key in options) {
    if (options.hasOwnProperty(key)) {
      if (options[key] !== undefined) {
        delimiter[key] = options[key];
      }
    }
  }

  const segments = text.split(delimiter.open);
  const numOfSegments = segments.length;

  let templateStr = [];
  templateStr.push(wrapInQuotes(segments[0]));

  let closingDelimLoc = 0;
  let funcArgs = [];
  let theVariable;
  let remaining;

  let i = 1;
  while (i < numOfSegments) {
    closingDelimLoc = segments[i].indexOf(delimiter.close);

    theVariable = segments[i].slice(0, closingDelimLoc);
    funcArgs.push(theVariable);
    templateStr.push(theVariable);

    remaining = segments[i].slice(closingDelimLoc + delimiter.close.length);
    templateStr.push(wrapInQuotes(remaining));

    i++;
  }

  templateStr = 'while(times--) { console.log(' + templateStr.join('+') + ')}';

  return new Function(funcArgs.join(","), 'times', templateStr);

};

var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
var logResult = template( string );
logResult( 'love', 'ice cream', 2 );
// logs the message "Hi, my name is Richard. And I love this ice cream!", twice
