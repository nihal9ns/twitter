/* eslint-disable */

import $ from "jquery";

export function customWrap() {
  $(document).ready(function() {
    $("input#searchinput").keypress(function(event) {
      if (event.keyCode == "13") {
        if ($("input#searchinput").val() == "aadhar") {
          window.location.href = window.location.href + "aadhar";
        } else {
          alert("Please search for 'aadhar'");
        }
      }
      event.stopPropagation();
    });
    $("img#navbaravatar").click(function() {
      $("#navbaravatardropmenu").toggle();
    });
    $("html").click(function() {
      $("#navbaravatardropmenu").hide();
    });
    $("img#navbaravatar").click(function(event) {
      event.stopPropagation();
    });
    // $("div.user>div>div>div>img").hover(function() {
    //   $("div.avahoverprofcard").toggle();
    // });
    $("#dropfilterlist").click(function() {
      $("#filtertypes").toggle();
    });
    $("#dropfilterlist").click(function() {
      if ($("#dropfilterlist").text() == "Show") {
        $("#dropfilterlist").text("Hide");
      } else {
        $("#dropfilterlist").text("Show");
      }
    });
    $("#dropfilterlist").click(function() {
      $("div.searchpgwhotoflw").toggleClass("searchpgwhotoflwtoggle");
    });
    $("#dropfilterlist").click(function() {
      $("div.searchtweetfeedsdiv").toggleClass("searchtweetfeedstoggle");
    });
    $("#dropfilterlist").click(function() {
      $("div.trendspapercardinnerdiv").toggleClass("searchtrendstoggle");
    });
  });
}
