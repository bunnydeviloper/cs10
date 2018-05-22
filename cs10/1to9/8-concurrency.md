## The beauty and joy of computing (BJC)  
**Dan Garcia**

# Lecture 8
## Concurrency

- Concurrency is multitasking
- Moore's Law: number of transistors per square inch on integrated circuits doubled every year

- Background: threads
- A thread stands for "thread of execution", is a single stream of instructions
- A program/process can split, or fork itself into separate threads, which can execute simultaneously => parallelism
- A single CPU can execute many threads by TIme Division Multipexing
- Multithreading is running multiple threads through the same hardware
- Speedup issues: Amdahl's Law: apps can never be completely parallelized, some serial code remains: no matter what, something has to happen first
- Speedup issues: overhead: divide the problem, all workers are not equally fast, workers overwrite each other, wait for last worker to finish to proceed (slowest/weakest link problem), put data back together as if were done by one (synchonization)

Quiz: This "sea change" to multi-core parallelism means that the computing community has to rethink:
a. languages
b. architectures
c. algorithms
d. data structures
e. all
correct: E

- Non-deterministic parallelism: a race, we don't know which one get execute first
- Deadlock: two people need to draw a graph but there is only one pen and one ruler, one grab each, but neither let go of what they have
- Livelock: similar to deadlock, but the states of the processes constantly change with regard to one another
