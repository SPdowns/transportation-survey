$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    console.log(); 
    $("#stress").show();
    var result = 0;
    // var value = $("input:checkbox[name=option]:checked").length;
    $("input:checkbox[name=option]:checked").each(function(){
      var value = parseInt($(this).val());
      result += value;
    });
      if (result <= 6) {
        $("#low-stress").show();
      } else if (result <= 10) {
        $("#med-stress").show();
      } else if (result >=11) {
        $("#high-stress").show();
      }
  
    $("#stress-test").hide();
  });
});