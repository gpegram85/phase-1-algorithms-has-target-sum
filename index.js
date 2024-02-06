function hasTargetSum(array, target) {

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] === target) {
        return true
      }
    } 
  } return false
}

/* 
  O(n^2)
  The runtime grows quadratically based on the length of the input array since we have to loop 2 times
*/

/* 
  function that takes in an array and a target value

  a for loop to establish 1st comparative value i
    nested loop to establish second comparative value j
      if statement to check if array[i] + array[j] equals target value
      return true if yes
      return false if no
*/

/*
   Function that intakes an array and a target sum integer
  for loop through the array comparing sum value pairs
  will need to loop through all possible pairs so nest another for loop to increment a second variable through each value PER each parent loop cycle
  select array[i], compare to full loop of array[j], if no match
  uptick i in array[i], compare to full loop of array[j]
  j can equal i + 1 as we don't need to compare the value at the current [i] index to itself
  return true when array[i] + array[j] equals the target value
  or return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
