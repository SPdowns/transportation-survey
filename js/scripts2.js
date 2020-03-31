$(document).ready(function(){
  $("form#stress-test").submit(function(event){
    event.preventDefault();
    $("#stress").show();

    $("input:checkbox[name=option]:checked").each(function(){
      var warning = parseInt($(".warning").val());
      var stress = parseInt($(".stress").val());
      var symptoms = parseInt($(".symptoms").val());
      console.log (warning, stress, symptoms)
      var result = (warning + stress + symptoms);

      if (result <= 6) {
        $("#low-stress").show();
      } else if (result <= 10) {
        $("#med-stress").show();
      } else if (result >=11) {
        $("#high-stress").show();
      }
      
    });
    

  });
});