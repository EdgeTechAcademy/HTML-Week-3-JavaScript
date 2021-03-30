function function0() {
  var name = 'Gary James';
  var age = 63;
  var programmer = true;
  console.log("My name is " + name +
    " and I am " + age + " years old. " +
    " And next year I will be " + ++age + 
    ". Am I a programmer? " + programmer);
}
// let field1 = document.getElementById('field1');
// field1.innerHTML = "My name is " + name + " and I will be " +
//                 age + " years old next " + ++age + " year. Am I a programmer? " + programmer;

function function1() {
  let field1 = document.getElementById('field1');
  let newColor = getColor();
  field1.innerHTML = newColor;
  field1.style.color = newColor;
}

function function2() {
  let field1 = document.getElementById('field1');
  let newColor = getColor();
  field1.innerHTML = newColor;
  document.body.style.backgroundColor = newColor;
}

function function3(value) {
  field1.innerHTML = articles[value];
}

function getColor() {
  let newColor = '#';
  for (var i = 0; i < 6; i++)
    newColor += '0123456789ABCDEF' [randInRange(16)]
  return newColor;
}

function randInRange(range) {
  var myNum = Math.random() * range;
  return Math.floor(myNum);
}
