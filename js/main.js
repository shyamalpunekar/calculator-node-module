function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
}

Calculator.prototype.add = function(first, second){
  var output = [];
  if(first >= second){
    output.push(first / second);
  } else{
    output.push("Your first number is less than your second.")
  }
  return output
}

exports.calculatorModule = Calculator;
