$("select").on("click" , function() {

  $(this).parent(".select-box").toggleClass("open");

});

$(document).mouseup(function (e)
{
    var container = $(".select-box");

    if (container.has(e.target).length === 0)
    {
        container.removeClass("open");
    }
});


$("select").on("change" , function() {

  var selection = $(this).find("option:selected").text(),
      labelFor = $(this).attr("id"),
      label = $("[for='" + labelFor + "']");

  label.find(".label-desc").html(selection);
	document.getElementById("producto").innerHTML = $(this).find("option:selected").text();
	document.getElementById("precio").innerHTML = $(this).find("option:selected").val();
	document.getElementById("total").innerHTML = $(this).find("option:selected").val();

});
