# Selection sort
* intro: have a bunch of cards that are un-order, swap 2 cards at a time and sort small > large

### Challenge: implement swap

### Selection sort pseudocode
* What do you think about this algorithm?
* What parts of it seem to take the longest?
* how do you think it would preform on big arrays?

### Challenge: Find minimum in subarray

### Challenge: implement selection sort

### Analysis of selection sort
* how many times does the loop inside indexOfMinimum fn run?
* arithmetic series:
  * sum of number from 1 to n: (n + 1)/(n/2) = n(square)/2 + n/2
* the total running time for selection sort has three parts:
  * running time for all the calls to `indexOfMinimum` -> big-Theta(n(square))
  * running time for all the calls to `swap` -> big-Theta(n), const time
  * running time for rest of the loop in the `selectionSort` function -> big-Theta(n)
  * HENCE: add up, running time for selection sort is big-Theta(n(square))

### Project: selection sort visualizer
