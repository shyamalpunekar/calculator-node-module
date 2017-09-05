$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var first = $('#first').val();
    var second = $('#second').val();
    var simpleCalculator = new Calculator("orange");
    var output = simpleCalculator.add(parseInt(first), parseInt(second));
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
