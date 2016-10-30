var offset_val = 800;

// Start animations
$("ul").animate({
  "right": "0px"
});
$("#down_logo").animate({
  "top": "300px"
},500);


//Video button
$("#watch").on("mouseenter", function(event) {
  $(this).attr("src", "watch2.png");
}).on("mouseleave", function(event) {
  $(this).attr("src", "watch1.png");
});

//pdf-buttons
$("#sitemap_button").on("mouseenter", function(event) {
  $(this).css("background-color", "rgb(214,71,51)");
  $("#sitemap_button_text").css("color", "white");
}).on("mouseleave", function(event) {
  $(this).css("background-color", "white");
  $("#sitemap_button_text").css("color", "rgb(214,71,51)");
});

$("#business_button").on("mouseenter", function(event) {
  $(this).css("background-color", "white").css("border-color", "white");
  $("#business_button_text").css("color", "rgb(214,71,51)");
}).on("mouseleave", function(event) {
  $(this).css("background-color", "rgb(214,71,51)").css("border-color", "black");
  $("#business_button_text").css("color", "black");
});

//Menu bar

$(window).scroll(function(event) {
  var scroll_top = $(window).scrollTop();
  if (scroll_top >= offset_val) {
    $("#panel_background").css("visibility", "visible");
    $("#panel_background").animate({
      "height": "80px"
    }, 200);
    $("li a").css("color", "white");
    $("ul").css("position", "fixed");
  };
  if (scroll_top < offset_val) {
    $("#panel_background").css("visibility","hidden");
    $("li a").css("color", "rgb(0,196,180)");
    $("ul").css("position", "absolute");
  }
});

//Panel scroll
$(document).ready(function (){
    $("#app_button").click(function (){
        $('html, body').animate({
            scrollTop: 1300
        }, 500);
    });
});
$(document).ready(function (){
    $("#mission_button").click(function (){
        $('html, body').animate({
            scrollTop: 2700
        }, 500);
    });
});
$(document).ready(function (){
    $("#contact_button").click(function (){
        $('html, body').animate({
            scrollTop: 3700
        }, 500);
    });
});
$(document).ready(function (){
    $("#down_logo").click(function (){
        $('html, body').animate({
            scrollTop: 1300
        }, 500);
    });
});

//app interaction
$(document).ready(function() {
  $("#buttons_app_transfer").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen2.png");
    }).fadeIn(100, "swing");

    $("#buttons_app_transfer").css("visibility", "hidden");
    $("#buttons_app_back").css("visibility", "visible");
    $("#buttons_app_transfergo").css("visibility", "visible");
    $("#buttons_app_withdraw").css("visibility", "hidden");
  });
  $("#buttons_app_back").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen1.png");
    }).fadeIn(100, "swing");
    $("#buttons_app_back").css("visibility", "hidden");
    $("#buttons_app_transfer").css("visibility", "visible");
    $("#buttons_app_transfergo").css("visibility", "hidden");
    $("#buttons_app_withdraw").css("visibility", "visible");
    $("#buttons_app_withdrawgo").css("visibility", "hidden");
  });
  $("#buttons_app_transfergo").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen3.png");
    }).fadeIn(100, "swing");
    $("#buttons_app_transfergo").css("visibility", "hidden");
  });
  $("#buttons_app_withdraw").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen4.png");
    }).fadeIn(100, "swing");
    $("#buttons_app_transfer").css("visibility", "hidden");
    $("#buttons_app_back").css("visibility", "visible");
    $("#buttons_app_withdraw").css("visibility", "hidden");
    $("#buttons_app_withdrawgo").css("visibility", "visible");
  });
  $("#buttons_app_withdrawgo").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen5.png");
    }).fadeIn(100, "swing");
    $("#buttons_app_withdrawgo").css("visibility", "hidden");
  });
  $("#buttons_app_info").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen6.png");
    }).fadeIn(100, "swing");
    $("#buttons_app_infoback").css("visibility", "visible");
    $("#buttons_app_back").css("visibility", "hidden");
    $("#buttons_app_transfer").css("visibility", "hidden");
    $("#buttons_app_transfergo").css("visibility", "hidden");
    $("#buttons_app_withdraw").css("visibility", "hidden");
    $("#buttons_app_info").css("visibility", "hidden");
    $("#buttons_app_withdrawgo").css("visibility", "hidden");
  });
  $("#buttons_app_infoback").click(function() {
    $("#frontscreen").fadeOut(200, "swing", function() {
      $(this).attr("src", "screen1.png");
    }).fadeIn(100, "swing");
    $("#buttons_app_infoback").css("visibility", "hidden");
    $("#buttons_app_transfer").css("visibility", "visible");
    $("#buttons_app_withdraw").css("visibility", "visible");
    $("#buttons_app_info").css("visibility", "visible");
  })
});
