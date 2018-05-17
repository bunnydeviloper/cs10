## The beauty and joy of computing (BJC)  
**Dan Garcia**

# Lecture 22
## Limits of Computing

**Introduction to Complexity Theory**
- Tractable with efficient solutions in reasonable time (constant, log, linear, quad, cubic)
- Intractable problems: can be solved but not fast enough (exponential)

Quiz: whats the most you can put in your knapsack?
You have a backpack with a weight limit (15kg), which boxes (with weights and values) should be taken to maximize value?
(any number of each box is available)
1kg for $1, 2kg for $2, 1kg for $2, 4kg for $10, 12kg for $4

a. $10, b. $15, c. $33, d. $36, e. $40
Correct: D, use 3 of the 4kg = $30, then add 3 of 1kg = $6, total $36

**Heuristics, NP, NP-Hard, NP-Complete**
- A problem might have an optimal solution but cannot be solved in reasonable time => approximation
- Heuristic: a technique that may allow us to find an approximate solution (eg: knapsack, put valuable stuff in first, the greedy tecnq.)
- Some problems cannot be solved using any algorithm
- Some problems have no known efficient solution
- Subset sum problem: Are there a handful of these numbers (at least 1) that add togethr to get 0? (-2, -3, 15, 14, 7, -10)

- NP: in polynomial time solution
- in NP: non-deterministic polynomial = you can guess the solution (random), and i can verify it in polynomial time
- NP-hard: you are the hardest guy in the set of NP
- NP-complete: in NP and NP-hard

- reduce: when one problem can solve an entire class of them
- Is P = NP?
- Traveling salesman problem: brute-force solution (O(n!)), dynamic programming algorithms (O(n^2 * 2^n)), selling on ebay (O(1))

**Decidability**
- A problem is decidable if it has a solution (can answer Y/N in a finite amount of time)
- Proof by contradiction (are there unlimited number of prime numbers?)
- The Halting Problem: given a program and some input, will that program eventually stop or will it loop forever? (think of waiting for the bus, do you wait for the bus stop coming?)


