function isPalindrome(word) {
  // Write your algorithm here
  const arr = word.split("")
  const lastEl= arr.length-1
  const treshold = Math.floor(arr.length/2)
  let sum =0 
    
  for(let i=0; i<treshold; i++){
   if(arr[i]=== arr[lastEl-i]){
    sum ++
   }
  }
  return sum === treshold
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("climmilc"));
}

module.exports = isPalindrome;
