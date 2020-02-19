function cleanUp(str) {
  return str.replace(/[^a-z]+/ig, ' ');
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
