$(document).ready(function () {
  $("#toggle-btn").click(function () {
    // change background 
    $("body").toggleClass("change-background");
    $(this).css("border", "1px solid #f5f5f5");

    //toggle button text
    $("span").text($("span").text() == "Light Mode" ? "Dark Mode" : "Light Mode");
  })
  $('#toggle-btn').click(function () {
  let icon = $(this).find("ion-icon")
  icon.attr("name") === "moon" ? icon.attr("name", "sunny") : icon.attr("name", "moon")
  $("body").toggleClass("bg-black").attr("name")
  })
})