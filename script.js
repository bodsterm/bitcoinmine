function simulateMining() {
  let nonce = 0;
  const target = "0000"; // Simplified difficulty (4 leading zeros)
  const data = "SampleBlockData";
  let hash;

  while (true) {
    hash = sha256(data + nonce); // Assume sha256 is a library function
    if (hash.startsWith(target)) {
      document.getElementById("result").innerText = 
        `Found valid hash: ${hash} with nonce: ${nonce}`;
      break;
    }
    nonce++;
  }
}

// Placeholder for SHA-256 (use a library like js-sha256)
function sha256(input) {
  // In a real project, use a library like https://github.com/emn178/js-sha256
  return input + "-fakehash"; // Simplified for demo
}
