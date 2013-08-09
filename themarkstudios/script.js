$(window).load(function() {
  $(document).ready(function() {
    // Set footer at bottom of screen
    resize_body();
    $(window).resize(function() {
      resize_body();
    });

    // Header navigation hover
    $("#header-nav").on("mouseover", "li a:not(.mobile)", function() {
      $(this).closest("li").css("padding", "4px");
      $(this).closest("li").css("border", "1px #fff solid");
    });
    $("#header-nav").on("mouseout", "li:not(.current-page) a:not(.mobile)", function() {
      $(this).closest("li").css("padding", "5px");
      $(this).closest("li").css("border", "none");
    });

    // Case Studies Navigation
    $("#case-studies-nav ul:not(.mobile) li").on('click', 'a', function() {
      $("#case-studies-nav ul:not(.mobile) li a").each(function() {
        var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
        $(this).closest("li").css("background", "none");
        $(this).closest("li").removeClass("active");
        $(this).find("img").attr("src", "images/case_studies_nav" + image);
      });
      var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
      $(this).find("img").attr("src", "images/case_studies_nav/rollovers" + image);
      var name = image.substring(1, image.lastIndexOf("."));
      $("#case-studies-content").load("case_studies/" + name + ".html");
      $("#case-studies-content").find("video").load();
      $(this).closest("li").css("background-color", "#fff");
      $(this).closest("li").addClass("active");
    });
    $("#case-studies-nav ul:not(.mobile) li").first().find("a").trigger("click");
    $("#case-studies-nav ul:not(.mobile)").on('mouseover', 'li:not(.active)', function() {
      var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
      $(this).find("img").attr("src", "images/case_studies_nav/rollovers" + image);
    });
    $("#case-studies-nav ul:not(.mobile)").on('mouseout', 'li:not(.active)', function() {
      var image = $(this).find("img").attr("src").substring($(this).find("img").attr("src").lastIndexOf("/"));
      $(this).find("img").attr("src", "images/case_studies_nav" + image);
    });

    // Case Studies Navigation (MOBILE)
    $("#case-studies-nav ul.mobile li").on('click', 'a', function() {
      $("#case-studies-nav ul.mobile li a").each(function() {
        var image = $(this).attr("name");
        $(this).closest("li").css("background-color", "#2b3990");
        $(this).closest("li").removeClass("active");
        $(this).find("img").attr("src", "images/case_studies_nav/" + image);
      });
      var name = $(this).attr("name").substring(0, $(this).attr("name").lastIndexOf("."));
      $("#case-studies-content").load("case_studies/" + name + ".html");
      $("#case-studies-content").find("video").load();
      $(this).closest("li").addClass("active");
      $(this).closest("li").css("background-color", "#000");
      $("#mobile-current-case-study").trigger("click");

      // Current case study (MOBILE)
      var case_study = $("#case-studies-nav ul.mobile").find("li.active a").first().html();
      $("#mobile-current-case-study").html(case_study);
    });
    $("#case-studies-nav ul.mobile li").first().find("a").trigger("click");

    // Header navigation toggle click (MOBILE)
    $("#header-nav").click(function() {
      if ($("input[name='mobile']").val() == "true") {
        if ($(this).find("ul").css("display") == "none") {
          $(this).find("ul").css("display", 'inline');
          $(this).attr("class", "active");
        } else {
          $(this).find("ul").css("display", "none");
          $(this).attr("class", "inactive");
        }
      }
    });

    // Current page in navigation (MOBILE)
    var page_name = document.title.substring(document.title.lastIndexOf("-") + 2);
    $("#mobile-current-page").html(page_name);

    // Case Studies navigation toggle click (MOBILE)
    $("#mobile-current-case-study").click(function() {
      if ($(this).parent("#case-studies-nav").find("ul.mobile").css("display") == "none") {
        $(this).parent("#case-studies-nav").find("ul.mobile").css("display", 'inline');
        $(this).attr("class", "active");
      } else {
        $(this).parent("#case-studies-nav").find("ul.mobile").css("display", "none");
        $(this).attr("class", "inactive");
      }
    });
  });
});

function resize_body() {
  if ($("body#home").length != 0) {
    var tmp = $(window).height() - $("#header").outerHeight(true) - $(".content#home-content").outerHeight(true) + parseInt($(".content#home-content").css("padding-bottom"));
    $(".content#home-content").css("padding-bottom", tmp);
  } else {
    var tmp = $(window).height() - $("#header").outerHeight(true) - $(".content").outerHeight(true) - $("#footer").outerHeight(true) + parseInt($(".content").css("padding-bottom"));
    $(".content").css("padding-bottom", tmp);
  }
  if ($(window).width() > 480) {
    $("input[name='mobile']").val("false");
    $("#header-nav li a").removeClass("mobile");
    $("#header-nav").find("ul").css("display", 'inline');
    $("#header").css("width", "");
    $(".content").css("width", "");
    $("#footer").css("width", "");
  } else {
    $("input[name='mobile']").val("true");
    $("#header-nav li a").addClass("mobile");
    $("#header-nav").find("ul").css("display", 'none');
    $("#header").css("width", $(window).width() + "px");
    $(".content").css("width", $(window).width() + "px");
    $("#footer").css("width", $(window).width() + "px");
  }
}