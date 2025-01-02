$("body").css("overflow", "hidden");

$(window).on("load", function () {
    $("body").css("overflow", "auto");
    
    $("#loader").fadeOut("slow");
});