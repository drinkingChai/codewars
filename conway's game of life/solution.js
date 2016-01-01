function nextGen(cells){
  // Uncomment next row to have an example
  // return cells;
  changes_to_make = {}  //log changes to make to cells
  
  function findEight(i, j) {
    //finds the number of living neighbors
    function retCell(x, y) { return x >= cells.length || x < 0 || y >= cells[x].length || y < 0 ? 0 : cells[x][y] } //return 0 if neighbor is dead or doesn't exist, 1 if alive
    return [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]].map(function(n) {
      //check all eight neighbors
      return retCell(i+n[0],j+n[1]);
    }).reduce(function(prev, cur) { return prev + cur }) ;  //return the number of neighbors
    
  }

  for (var i in cells) {
    for (var j in cells[i]) {
      //cells will not be altered during this loop, since all changes have to happen simultaneously
      livingNeighbors = findEight(parseInt(i), parseInt(j))
      if (livingNeighbors < 2 || livingNeighbors > 3) {
        //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
        //Any live cell with more than three live neighbours dies, as if by overcrowding.
        changes_to_make[i+j] = 0;
      } else if (livingNeighbors == 3) {
        //Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
        changes_to_make[i+j] = 1;
      }
    }
  }

  for (var i in cells) {
    for (var j in cells[i]) {
      if (i+j in changes_to_make) {
        //make changes by checking if the change to be made is in changes_to_make
        cells[i][j] = changes_to_make[i+j]
      }
    }
  }

  return cells;
}