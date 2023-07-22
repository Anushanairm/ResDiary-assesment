const readline = require("readline");

function groupArrayElements(arr, n) { 
    if (!Array.isArray(arr) || arr.length < 0) {
      throw new Error("Input can be an array with length >= 0.");
  } 

  if (n <= 0) {
    throw new Error("N must be a positive integer.");
  }

  const sizeOfPart = Math.floor(arr.length / n);
  const remainder = arr.length % n;
  const dividedArrays = [];
  let startIdx = 0;

  for (let i = 0; i < n; i++) {
    let endIdx = startIdx + sizeOfPart + (i < remainder ? 1 : 1);
    dividedArrays.push(arr.slice(startIdx, endIdx));
    startIdx = endIdx;
  }

  return dividedArrays ;
}

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Dynamically request configuration values
rl.question("Array values (Space Separated): ", (input) => {
  const inputArray = input.split(" ").map((val) => Number(val.trim()));
  
  // Dynamically query N value
  rl.question("Enter the value of N: ", (N) => {
    const result = groupArrayElements(inputArray, parseInt(N));
    console.log(result);

    // Close the readline interface
    rl.close();
  });
});