function listPeople(data) {
  var list = {};
  for(var person in data){
    if(!list[person]){
      list[person] = {name: data[person].name, follows: [], followers: []};
    }
    for(var i = 0; i < data[person].follows.length; i++){
      list[person].follows.push(data[data[person].follows[i]].name);
      if(!list[data[person].follows[i]]) {
        list[data[person].follows[i]] = {name: data[data[person].follows[i]].name, follows: [], followers: []};
      }
      list[data[person].follows[i]].followers.push(data[person].name);
    }
  }
  return list;
};

function mostFollows(data, age = 0){
  var listPpl = listPeople(data);
  var count = 0;
  var name = "";
  for(var person in listPpl){
    if(listPpl[person].follows.length > count && data[person].age >= age){
      count = listPpl[person].follows.length;
      name =  listPpl[person].name;
    }
  }
  return name;
};

function mostFollowers(data, age = 0){
  var listPpl = listPeople(data);
  var count = 0;
  var name = "";
  for(var person in listPpl){
    if(listPpl[person].followers.length > count && data[person].age >= age){
      count = listPpl[person].followers.length;
      name =  listPpl[person].name;
    }
  }
  return name;
};

function findNotFriends(data){
  var notFriends = {};
  var listPpl = listPeople(data);
  for(var person in listPpl) {
    notFriends[person] = {name: listPpl[person].name, onlyFollows: []};
    for (var i = 0; i < listPpl[person].follows.length; i++){
      if(!listPpl[person].followers.includes(listPpl[person].follows[i])) {
        notFriends[person].onlyFollows.push(listPpl[person].follows[i]);
      }
    }
  }
  return notFriends;
}

function summary(data){
  var summary = {};
  var listPpl = listPeople(data);
  for(var person in listPpl) {
    var numFollows = listPpl[person].follows.length;
    var numFollowers = listPpl[person].followers.length;
    summary[person] = {name: listPpl[person].name, numFollows: numFollows, numFollowers: numFollowers};
  }
  return summary;
}

var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


console.log(listPeople(data));
console.log(mostFollows(data));
console.log(mostFollowers(data));
console.log(mostFollows(data, 30));
console.log(mostFollowers(data, 30));
console.log(findNotFriends(data));
console.log(summary(data));