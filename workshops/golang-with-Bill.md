### Wiliam Kannedy (Bill)

### today: semantics
### tomorrow: concurrency and tooling

* understand a code and the cost it takes for each line of code
  * external latency (disk…, synchronization)
  * garbage collector (performance loss, cost of allocation)
  * data access (how efficient you work with the machine, and algorithm efficiency, optimize and readable) (scale is important)

pointers: address of data
* virtual cores
* hyperthreading
* processors (p): each p is attached to an m (machine)
* operating system
* go routine (G), thread, path of execution

data-oriented language

memories
  * stack: 2k, a piece of memory in the stack is a frame
    * you only have access to the values inside your current frame
  * heap

value semantic: cost: inefficiency
opposite of value semantic is pointer semantics

inside parameters: pass by "value" versus pass by "address"
pointer variables (eg: `*int`): a pointer that can store an address
  sharing gives us efficiency, but we now lost control, complexity cost
  you need to decide when to use which
  if you mutate the data, the original data is lost, you don't have access to it anymore
    however, your stack will not use more memories
    memory below the active frame is invalid, memory above the active frame (Go routine) is valid

factory functions
  when using construction, make sure to use value semantics

everytime fn main make aanother fn call, it clean the prev. stack, anything with 0 value then it's cleaned
  eg: pointers will be cleaned

go compiler can do static code analyses
  escape analyses: look at your code and decide if it should keep the value/pointers or not
  you can access what's inside the heap
    pacing algorithm: decide when to start gabage collection to keep the live heap at the limit, GOGC
  what's happen when you have 200 stacks with pointers points to the other
    contiguous stack: allocate a new block of memory, 25% larger than the last one, values move to the new one
  memory leaks in go
  running time

readabilty means you write code that does not hide the cost of doing something
don't do something if you don't know the cost of it, what's the price you have to pay

go strategies:
