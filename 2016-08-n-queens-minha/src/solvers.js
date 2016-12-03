/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board =  new Board({n:n}); 
  var solution = board.rows();
  var options = [];
  for (var i = 0; i < solution.length; i++) {
    options.push(i);
  };
  for (var i = 0; i < solution.length; i++) {
    var rooksIdx = Math.floor(options.length * Math.random());
    solution[i][options[rooksIdx]] = 1;
    options.splice(rooksIdx, 1);
  };
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  //N Rooks 솔루션 개수는 n!
  var solutionCount = function(n) {
    if (n < 2) {
      return 1;
    } else if (n >= 2) {
      return n * solutionCount(n-1);
    }
  }; //fixme
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount(n);
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();
  var solutionFound = false;

  var setSolution = function(rowIndex){
    for(var colIndex = 0; colIndex < n; colIndex++){
      solution[rowIndex][colIndex] = 1;
      if(board.hasAnyQueenConflictsOn(rowIndex, colIndex)){
        solution[rowIndex][colIndex] = 0;
        continue;
      }
      else{
        if(rowIndex < n-1){
          setSolution(rowIndex+1);
          if(!solutionFound){
            solution[rowIndex][colIndex] = 0;
            continue;
          }
          return;
        }
        else{
          solutionFound = true;
          return;
        }
      }
    }
    return;
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  setSolution(0);
  return solution;
  
  //더 깔끔하게 정리한 코드...
  // var board = new Board({n:n});
  // var solution = board.rows(); //fixme

  // var setNQueen = function(row, board) {
  //   if (row === n) {
  //     return true;
  //   }
  //   for (var colIndex = 0; colIndex < n; colIndex++) {
  //     board.get(row)[colIndex] = 1;
  //     if(board.hasAnyQueenConflictsOn(row, colIndex) === false && setNQueen(row+1, board) === true) {
  //       return true;
  //     }
  //     board.get(row)[colIndex] = 0;
  //   }
  //   return false;
  // }
  // setNQueen(0, board);  
 
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solution = board.rows();
  var solutionCount = n === 0? 1 : 0;

  var checkCount = function(rowIndex) {
    for(var colIndex = 0; colIndex < n; colIndex++) {
      solution[rowIndex][colIndex] = 1;
      if(board.hasAnyQueenConflictsOn(rowIndex, colIndex)){
        solution[rowIndex][colIndex] = 0;
        continue;
      }
      else{
        if(rowIndex < n-1){
          checkCount(rowIndex+1);
          solution[rowIndex][colIndex] = 0;
          continue;
        } 
        else{
          solutionCount++;
          solution[rowIndex][colIndex] = 0;
          return;
        }
      }
    }
    return;
  }
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  checkCount(0);
  return solutionCount;
};
