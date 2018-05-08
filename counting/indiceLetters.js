function indiceLetters(str) {
  str = str.split(" ").join("");
  var letters = {};
  for (var i = 0; i < str.length; i++) {
    if(!letters[str[i]]) {
      letters[str[i]] = [i];
    } else {
      letters[str[i]].push(i);
    }
  }
  return letters;
}

console.log(indiceLetters("lighthouse in the house"));