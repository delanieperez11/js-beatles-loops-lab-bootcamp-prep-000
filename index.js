function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + ` plays ` + instruments[i]);
  }
return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(facts[i] + `!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(number){
  var newNumber = [];
  do {newNumber.push(`I love the Beatles!`); 
    i++;
  } while (number < 15);
  return newNumber;
}