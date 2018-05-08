function countLetters(str) {
  str = str.split(" ").join("");
  var letters = {};
  for (var i = 0; i < str.length; i++) {
    if(!letters[str[i]]) {
      letters[str[i]] = 1;
    } else {
      letters[str[i]] += 1;
    }
  }
  return letters;
}

console.log(countLetters("lighthouse in the house"));