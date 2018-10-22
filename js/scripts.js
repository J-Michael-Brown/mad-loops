$(document).ready(function() {

  $("form#form1").submit(function(event) {
    var input1 = $("input#input1").val();
    var input2 = $("input#input2").val();
    var input3 = $("input#input3").val();
    var input4 = $("input#input4").val();
    var input5 = $("input#input5").val();

    $(".outputform1").append(input1);
    $(".outputform2").append(input2);
    $(".outputform3").append(input3);
    $(".outputform4").append(input4);
    $(".outputform5").append(input5);

    $("#hidden").show();

    event.preventDefault();
  });



});
