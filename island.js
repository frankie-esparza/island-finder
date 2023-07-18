function getNeighbors(row, col, matrix) {
  let startNode = [row, col];
  let rows = [row, row + 1, row - 1];
  let cols = [col, col + 1, col - 1];
  let neighbors = [];

  rows.forEach(r => {
    cols.forEach(c => {
      let currNode = [r, c];

      if (String(currNode) !== String(startNode) &&
        isInsideTheMatrix(r, c, matrix) &&
        hasValueOfOne(r, c, matrix)) {
        neighbors.push(currNode);
      }
    });
  });

  return neighbors;
}

/**
 * 1) create queue of nodes, enqueu 0,0
 * 2) create set of visited nodes
 * 3) While queue is not empty
 * 4)   pop first node off of queue
 * 5)   if not yet visisted
 *        a) add to visited
 *        b) DO THE THING
 *        c) add all neighbors to queue
 */

function countIslands(matrix) {
  let islandCount = 0;
  let visited = new Set();

  // iterate over all spots in the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let startNode = [row, col];

      // if a 1 is found that hasn't been visited yet,
      // increment 'islandsCount' and start traversing over neighbors
      if (matrix[row][col] === 1 && !visited.has(String(startNode))) {
        islandCount++;
        let stack = [startNode];
        visited.add(String(startNode));

        while (stack.length > 0) {
          let node = stack.pop();
          let [row, col] = node;
          let neighbors = getNeighbors(row, col, matrix);

          neighbors.forEach(neighbor => {
            if (!visited.has(String(neighbor))) {
              stack.push(neighbor);
              visited.add(String(neighbor));
            }
          });
        }
      }
    }
  }
  return islandCount;
}

/*************
 * HELPERS
 ************
 */
function isInsideTheMatrix(row, col, matrix) {
  return (row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length);
}

function hasValueOfOne(row, col, matrix) {
  if (isInsideTheMatrix(row, col, matrix)) return matrix[row][col] === 1;
  else return false;
}


// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
