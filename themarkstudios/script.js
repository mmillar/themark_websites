$(document).ready(function() {
  // Header navigation hover
  $("#header-nav li a").mouseover(function() {
    $(this).closest("li").css("padding", "4px");
    $(this).closest("li").css("border", "1px #fff solid");
  });
  $("#header-nav li:not(.current-page) a").mouseout(function() {
    $(this).closest("li").css("padding", "5px");
    $(this).closest("li").css("border", "none");
  });

  // Case Studies Navigation
  $("#case-studies-nav a").click(function() {
    $("#case-studies-nav a").each(function() {
      $(this).closest("li").css("background", "none");
    });
    $("#case-studies-content div.hidden").each(function() {
      $(this).hide();
    });
    $(this).closest("li").css("background-color", "#fff");
    $("#case-studies-content").find("div.hidden#" + $(this).attr("id")).show();
  });
  $("#case-studies-nav a:first-child").trigger("click");
});