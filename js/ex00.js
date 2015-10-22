function func1(number){
  var remainder, result;

  remainder = number % 2;
  result = remainder == 0;
  return result;
}

function func2(number){
  return number % 5 == 0;
}

function func3(number){
  var resultA, resultB, result;
  resultA = func1(number);
  resultB = func2(number);
  result = resultA && resultB;
  return result;
}
