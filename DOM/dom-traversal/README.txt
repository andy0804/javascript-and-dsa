Given 2 identical (but not equal) DOM trees and one element of the first DOM tree, how would you find this element in the second DOM tree?
/**
 * Initialize the following identifiers
 *  getElement of ROOT A
 *  getElement of ROOT B
 *  getElement of node A
 *  getElement of node B
 * 
 * 
 * The approach would be to trace a path from the location of
 *  nodeA and then go  up to the root.
 *   
 *  We'll start from node A.
 *  Find'As parent and then all of A's children .
 *  And A's location amonst the children
 *  We 'll then push A's location in an path arrayarray
 * 
 *  Now that we are done evaluating with A , our current node becomes A'father.
 *  A's father's father becomes our parents
 *  We find' all the children of A'S GRANDFather and put them in Array
 *  Now we find A's fathers location in the children Array 
 *  We then push this into our path array
 * 
 *  In this way we move up till we reach the root.
 * 
 *  Once we reach the root , we have the path traced out in our path array and we exit.
 * 
 *  B will now use this path to reach