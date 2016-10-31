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
      $("body").attr("background", leagueBg[random]);
    }, function() {
      $("body").attr("background", prev);
    });
  $("button.overwatch").hover(
    function() {
      random = Math.floor(Math.random() * 3);
      $("body").attr("background", overwatchBg[random]);
    }, function() {
      $("body").attr("background", prev);
    });
  $("button.starcraft2").hover(
    function() {
      random = Math.floor(Math.random() * 3);
      $("body").attr("background", starcraft2Bg[random]);
    }, function() {
      $("body").attr("background", prev);
    });

  $("button.league").click(
    function() {
      prev = leagueBg[random];

      // Changes the background to the League background
      $("body").attr("background", leagueBg[random]);

      // Highlights League button
      $(this).css("border-width", "0.5em").css("border-color", "blue");

      // Reveals the League form and hides all the others
      $("form.league").show();
      $("form.overwatch").hide();
      $("form.starcraft2").hide();
    });
  $("button.overwatch").click(
    function() {
      prev = overwatchBg[random];

      // Changes the background to the Overwatch background
      $("body").attr("background", overwatchBg[random]);

      // Reveals the Overwatch form and hides all the others
      $("form.league").hide();
      $("form.overwatch").show();
      $("form.starcraft2").hide();
    });
  $("button.starcraft2").click(
    function() {
      prev = starcraft2Bg[random];

      // Changes the background to the Starcraft 2 background
      $("body").attr("background", starcraft2Bg[random]);

      // Reveals the Starcraft 2 form and hides all the others
      $("form.league").hide();
      $("form.overwatch").hide();
      $("form.starcraft2").show();
    });
})

/*
$(document).ready(function() {
  const Math = require("mathjs");

  var leagueBg     = {"/img/leagueBackground1.jpg",
                      "/img/leagueBackground2.jpg",
                      "/img/leagueBackground3.jpg"};
  var overwatchBg  = {"/img/overwatchBackground1.jpg",
                      "/img/overwatchBackground2.jpg",
                      "/img/overwatchBackground3.jpg"};
  var starcraft2Bg = {"/img/starcraft2Background1.jpg",
                      "/img/starcraft2Background2.jpg",
                      "/img/starcraft2Background3.jpg"};
  var random = Math.getRandomInt(0, 3);

  $("button.league").hover(
    function() {
      random = Math.getRandomInt(0,3);
      $("img#background").attr("src", "/img/leagueBackground1.jpg");
    });
  $("button.overwatch").hover(
    function() {
      random = Math.getRandomInt(0,3);
      $("img#background").attr("src", overwatchBg[random]);
    });
  $("button.starcraft2").hover(
    function() {
      random = Math.getRandomInt(0,3);
      $("img#background").attr("src", starcraft2Bg[random]);
    });

  $("button.league").click(
    function() {
      // Changes the background to the League background
      $("img#background").attr("src", "/img/leagueBackground1.jpg");

      // Reveals the League form and hides all the others
      $("form.league").show();
      $("form.overwatch").hide();
      $("form.starcraft2").hide();
    });
  $("button.overwatch").click(
    function() {
      alert("success");
      // Changes the background to the Overwatch background
      $("img#background").attr("src", overwatchBg[random]);

      // Reveals the Overwatch form and hides all the others
      $("form.league").hide();
      $("form.overwatch").show();
      $("form.starcraft2").hide();
    });
  $("button.starcraft2").click(
    function() {
      // Changes the background to the Starcraft 2 background
      $("img#background").attr("src", starcraft2Bg[random]);

      // Reveals the Starcraft 2 form and hides all the others
      $("form.league").hide();
      $("form.overwatch").hide();
      $("form.starcraft2").show();
    });
});
*/
