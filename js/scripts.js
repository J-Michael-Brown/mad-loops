$(document).ready(function() {

  $("form#form1").submit(function(event) {

    var blanks =["adj1", "animal1", "verb", "adj2", "animal2"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);

    });

    $("#hidden").show();

    event.preventDefault();
  });
});
