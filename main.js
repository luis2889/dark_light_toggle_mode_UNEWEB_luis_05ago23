$(document).ready(function () {
  $("#toggle-btn").click(function () {
    // change background color
    $("body").toggleClass("change-background");
    $(this).css("border", "1px solid #f5f5f5");

    // toggle button text

    $("span").text(
      $("span").text() == "Light Mode" ? "Dark Mode" : "LightMode"
    );
  });
  $("#toggle-button").click(function() {
    $(this).find(i).toggleClass("fa-moon fa-sun");
  });
});