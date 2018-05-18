## The beauty and joy of computing (BJC)  
**Dan Garcia**

# Lecture 7
## Algorithmic Complexity

**Algorithms: Specifications**
- What's in a spec? Typically they all have NAME, INPUTS, OUTPUT, (SIDE-EFFECT), EXAMPLE CALLS

Quiz: what do you think which factor below is the most imiportant in choosing the algorithm to use?
a. simplest
b. easiest to implement
c. take less time
d. uses up less space (memory)
e. give a more precise answer
correct: depends on the problem you're trying to solve

**Algorithm Analysis**
- Running time: how long does the algorithm take to run and finish its task
- Empirical analysis: count the number of "steps" involved, not time! (each operation = 1 step)
- Look at the worst case: consider runnig time as input grows (don't look at average running time)
- Order of growth: constant (eg: find first guy in a list), logarithmic (time doesn't change much as number of input grows), linear (eg: santa give gifts for each kid), quadratic, cubic, exponential

Quiz: worst-case running time when finding a student by ID, go through each one by one, if match return true, else false
a. constant
b. logarithmic
c. linear
d. quadratic
e. exponential
correct: C

*sorted*: if the list is sorted, correct answer is logarithmic
What if i give you the list in advance and you can put it in your unlinited storage? constant time

Quiz: finding a shared birthday with unsorted list of size n
=> quadratic (square)

Quiz: finding subsets: 3 people, 8 subsets can go get coffee together
=> exponential (2^3)

**Algorithms: Correctness and summary**
- For every input, it reports correct out put, doesn't crash, doesn't run forever
- Unit testing, debugging
