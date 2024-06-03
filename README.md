### A. Build Stack from Scratch with JavaScript
Hi Team! I'm very excited to share my experience in building a Stack (Last In, First Out) with a JavaScript solution.

I will focus on the main features of a Stack: pushing (adding a new element to the stack) and popping (removing the top element from the stack). One thing that we have to remember is that both push and pop methods should have O(1) time complexity!

### B. Solutions:
**1. Array Approach:**
- Many of us might think about using an Array to implement a Stack.
- Arrays in JavaScript have built-in methods like push and pop, which provide O(1) time complexity for adding and removing elements at the end of the array. This makes them suitable for stack implementation.

**2. Linked List Approach:**
- To maintain O(1) time complexity for both push and pop operations, we can also use a linked list.
- In this solution, we will use a linked list of nodes: `Top -> Node1 -> Node2 -> Node3`.
- **Push**: We add a new node to the top of the stack. This operation is O(1) because we simply update the top reference.
- **Pop**: We remove the node from the top of the stack. This operation is O(1) because we only update the top reference.
- Using a linked list allows us to maintain the desired O(1) time complexity for both operations, ensuring efficient stack management.
