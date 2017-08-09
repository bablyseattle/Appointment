$(document).ready(function(){
  $("#booking").submit(function(event){
    var name = $("input#name").val();
    var description = $("textarea#description").val();
    var date = $("input#appt-date").val();
    var startTime = $("input#start").val();
    var endTime = $("input#end").val();

    $(".name").text(name);
    $(".description").text(description);
    $(".date").text(date);
    $(".start-time").text(startTime);
    $(".end-time").text(endTime);

    $("#booking").slideToggle();
    $(".confirm").slideToggle();
    event.preventDefault();
  });
});
