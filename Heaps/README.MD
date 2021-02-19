Binary Heap

A parent node must have atleast 2 childers
It must be complete tree , where every level must be full.
Min Heap : Every Parents Key must be smaller than its children
Max Heap : Every Parents Key must be larger than its children

Inserting within a Min Heap
// We always fill our heap from the leftmost position.

Inserting element = 10 , Tree looks like this  
 10

Inserting element = 20, Tree looks like this

         10
       /
     20

Now we Heapify ,

Is Left Child 20 < 10 . As its not , we don't do anything.

Inserting element = 5, Tree looks like this

            10
          /    \

       20        5

Now we Heapify ,

Is Right child 5 < 10 . It is , so we swap.

       5
     /  \
    20  10

Insertinh element = 30 , Tree looks like this ,
We heapify but no change...

         5
        / \
      20   10
     /  \
    30

Inserting element = 15 , Tree looks like this ,
We heapify

         5
        / \
      20   10
     /  \
    30  15

Current node 15 < 20 , so we swap

Inserting element = 15 , Tree looks like this ,
We heapify

         5
        / \
      20   10
     /  \
    30  15

Current node 15 < 20 , so we swap

         5
        / \
      15   10
     /  \
    30  20

Heapify again...
Current node 15 < 5 , so we dont' dp anything

         5
        / \
      15   10
     /  \
    30  20

We now enter new element == 3

           5
        /     \
      15       10
     /  \     /
    30  20   3

Is current node 3 , less than parent node

Yes so Swap

           5
        /     \
      15       3
     /  \     /
    30  20   10

Is Current node 3 , less than parent node

Yes so Swap

           3
        /     \
      15       5
     /  \     /
    30  20   10

Is current node 3 less than parent node ...

No parent , so we stop.....

Inserting new element 0

            3
        /     \
      15       5
     /  \     / \
    30  20   10  0

Is current node 0 less than parent node ...

Yes

So we swap...

           3
        /     \
      15       0
     /  \     / \
    30  20   10  5

Is current node 0 less than parent node ...

Yes

So we swap...

           0
        /     \
      15       3
     /  \     / \
    30  20   10  5

Is current node 0 less than parent node ...

No ,so we stop....

################################################################

For Removing smallest element , we just remove element at 0

Tree looks like this....

        /     \
      15       3
     /  \     / \
    30  20   10  5

We replace root with the last element

           5
        /     \
      15       3
     /  \     / \
    30  20   10

When we remove , we need to ensure Heap property

We heapify down

We check both childen on which is smaller

5 < 15  
so small is 5

3 < 5

so small is 30

So we swap 3 and 5

           3
        /     \
      15       5
     /  \     / \
    30  20   10

Now we check if 10 < 5

Its not .. so we do nothing...
