$(document).ready(function() {
  var leagueBg     = ["/img/leagueBackground1.jpg",
                      "/img/leagueBackground2.jpg",
                      "/img/leagueBackground3.jpg"];
  var overwatchBg  = ["/img/overwatchBackground1.jpg",
                      "/img/overwatchBackground2.jpg",
                      "/img/overwatchBackground3.jpg"];
  var starcraft2Bg = ["/img/starcraft2Background1.jpg",
                      "/img/starcraft2Background2.jpg",
                      "/img/starcraft2Background3.jpg"];

  var random = Math.floor(Math.random() * 3);

  // tracks the previous image so hover can revert to it when it's done
  var prev = "/img/defaultBackground.jpg";

  $("button.league").hover(
    function() {
      random = Math.floor(Math.random() * 3);
      $("div.background").css("background-image", "url(" + leagueBg[random] + ")");
    }, function() {
      $("div.background").css("background-image", "url(" + prev + ")");
    });
  $("button.overwatch").hover(
    function() {
      random = Math.floor(Math.random() * 3);
      $("div.background").css("background-image", "url(" + overwatchBg[random] + ")");
    }, function() {
      $("div.background").css("background-image", "url(" + prev) + ")";
    });
  $("button.starcraft2").hover(
    function() {
      random = Math.floor(Math.random() * 3);
      $("div.background").css("background-image", "url(" + starcraft2Bg[random] + ")");
    }, function() {
      $("div.background").css("background-image", "url(" + prev + ")");
    });

  $("button.league").click(
    function() {
      prev = leagueBg[random];

      // Changes the background to the League background
      $("div.background").css("background-image", "url(" + leagueBg[random] + ")");

      // Enlarges the League button when clicked
      $("button > img").css("height", "8em")
                       .css("width", "8em");
      $("button.league > img").css("height", "9em")
                              .css("width", "9em");

      // Reveals the League form and hides all the others
      $("form").hide();
      $("form.league").show();
    });
  $("button.overwatch").click(
    function() {
      prev = overwatchBg[random];

      // Changes the background to the Overwatch background
      $("div.background").css("background-image", "url(" + overwatchBg[random] + ")");

      // Enlarges the League button when clicked
      $("button > img").css("height", "8em")
                       .css("width", "8em");
      $("button.overwatch > img").css("height", "9em")
                                 .css("width", "9em");

      // Reveals the Overwatch form and hides all the others
      $("form").hide();
      $("form.overwatch").show();
    });
  $("button.starcraft2").click(
    function() {
      prev = starcraft2Bg[random];

      // Changes the background to the Starcraft 2 background
      $("div.background").css("background-image", "url(" + starcraft2Bg[random] + ")");

      // Enlarges the League button when clicked
      $("button > img").css("height", "8em")
                       .css("width", "8em");
      $("button.starcraft2 > img").css("height", "9em")
                                 .css("width", "9em");

      // Reveals the Starcraft 2 form and hides all the others
      $("form").hide();
      $("form.starcraft2").show();
    });
})
