~~~~~~ Ajax Scenarios - Part 1 ~~~~~~
@@@ 8. Error handling
```
jQuery XMLHttpRequest === jqXHR: this is an object
textStatus: timeout, error, abort, or parsererror
errorThrown: Not Found, Internal Server Error

// demonstration:
$(function() {
   $("#loadTweets").click(function() {
       $("li").remove(); // Remove any existing li elements
       $(this).toggleClass("btn-primary"); // Switch to default grey
       $(this).html("Loading"); // Change text of button
       $.ajax({
            url: "/codecademy/error",
            dataType: "json",
            complete: function(jqXHR, textStatus) {
                $("#loadTweets").html("Load Again"); // Change back text of button
                $("#loadTweets").toggleClass("btn-primary"); // Revert back to default grey
            },
            error: function(jqXHR, textStatus, errorThrown) {
              $('#idfordivelement').text(textStatus+' '+errorThrown); //error Internal Server Error
              //$('#idfordivelement').text('Error: '+jqXHR+' '+errorThrown); //Error: 500 Internal Server Error            },
            },
            success: listTweets
        });
   });
});
function listTweets(response) {
    $("#twitterfeed").append("<li>"+response.text+"</li>");
}
```

@@@ 9. Avoiding Cross-Origin Resource Sharing CORS Errors
* Websites cannot make request accross domains due to security policy (same domain ok)
* Using JSONP as a data type (instead of JSON) will get around this problem.
* Also, add a callback to the URL (http://api...callback=?) or in the ajax call jsonpCallback: 'nameoffunction'

@@@ 10. Events and Dynamic Elements Added via AJAX
* jQuery events are typically bound to elements that are currently present in the DOM of the browser.
* So it is important that when you load elements via Ajax, that you do one of two things:
  a) Either you make sure any events you want to trigger on those elements are bound in the Ajax success callback. or
  b) You make sure you create an event bound to an existing element (e.g. 'body'), but filter that event based on attributes of the element you are going to add dynamically (NOT id). E.g. create an event handler on 'body' for any a.classname or button.otherclassname in 'body'.

@@@ 11. Using $.get to retrieve HTML

@@@ 12. Using JQuery load

@@@ 13. Set defaults for ajax calls using #.Ajax

~~~~~~ Posting form data using Ajax ~~~~~~
14. The shorthand #.post approach

15. POSTing data using the $.ajax call

16. Serializing and sending an entire for

17. Uploading a file asynchronously

~~~~~~ Ajax scenarios - Part 2 ~~~~~~
18. Setting and handling ajax call timeout

19. Cancelling an ajax request

20. Element data loaded dynamically vi

21. Ajax as a Promise with callbacks

22. What NOT to do with Ajax callbacks

23. Retrieving remote javascript via Ajax

~~~~~~ Applications of ajax ~~~~~~
24. Delete comments

25. Infinite scrolling

26. Voting widget

27. Update shopping cart
