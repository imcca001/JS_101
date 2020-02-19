

console.log(lightsOn(5));        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

console.log(lightsOn(100));      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/*
function lightsOn(switches) {
  let switchArray = [];
  switchArray.length = switches - 1
  switchArray.fill(false);

  let count = 1;
  while (count <= switches) {
    for (i = 0; i < switches; i++){
      if ((i + 1) % count === 0) {
        switchArray[i] = !switchArray[i];
      }
    }
    count += 1;
  }
  
  let newArray = []
  switchArray.forEach(function(stitch, idx){
    if (stitch === true) {
      newArray.push(idx + 1);
    } 
});
  return newArray;

}

*/