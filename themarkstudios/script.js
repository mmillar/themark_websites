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
  $("#case-studies-nav").on('click', 'a', function() {
    $("#case-studies-nav a").each(function() {
      var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
      $(this).closest("li").css("background", "none");
      $(this).closest("li").removeClass("active");
      $(this).find("img").attr("src", "images/case_studies_nav" + image);
    });
    $("#case-studies-content div.hidden").each(function() {
      $(this).hide();
    });
    $(this).closest("li").css("background-color", "#fff");
    $(this).closest("li").addClass("active");
    var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
    $(this).find("img").attr("src", "images/case_studies_nav/rollovers" + image);
    $("#case-studies-content").find("div.hidden#" + $(this).attr("id")).show();
  });
  $("#case-studies-nav li").first().find("a").trigger("click");
  $("#case-studies-nav").on('mouseover', 'li:not(.active)', function() {
    var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
    $(this).find("img").attr("src", "images/case_studies_nav/rollovers" + image);
  });
  $("#case-studies-nav").on('mouseout', 'li:not(.active)', function() {
    var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
    $(this).find("img").attr("src", "images/case_studies_nav" + image);
  });
});