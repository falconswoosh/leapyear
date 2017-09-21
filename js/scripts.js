function leapYear(input) {
  if (input % 400 === 0) {
    return true;
  } else if ((input % 4 !== 0) || (input % 100 === 0)) {
    return false;
  } else if (input % 4 === 0) {
    return true;
  };
};





$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#userInput").val();
    var output = leapYear(userInput);
    $("#output").text(output);
  });
});
