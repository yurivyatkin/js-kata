# Merge Sorted Arrays

Write a function that takes a number of sorted (in ascending order) arrays and returns a sorted array which contains all the items from the input arrays, sorted in the same (ascending) order.

Originally, this problem was given to merge only two arrays, but during the attempts to find a robust and testable solution, I realized that it is easier to solve a more general problem! Thus, the problem was restated as above.

Working in a TDD manner, I had to discover that it was necessary to make a few auxiliary functions, and write them in TDD fashion as well.

The idea of the solution is as follows. Imagine, you aligned the arrays so that the first elements form a column. Find the minimal element in this column, and move it into the resulting array. Realign the input arrays, as in the beginning, and repeat the same operation. Do this while there is an element in the first column, but keep the items in their respective rows.