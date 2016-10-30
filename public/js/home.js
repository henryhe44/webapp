$(document).ready(function() {
  var leagueBg     = {"../public/img/leagueBackground1.jpg",
                      "../public/img/leagueBackground2.jpg",
                      "../public/img/leagueBackground3.jpg"};
  var overwatchBg  = {"../public/img/overwatchBackground1.jpg",
                      "../public/img/overwatchBackground2.jpg",
                      "../public/img/overwatchBackground3.jpg"};
  var starcraft2Bg = {"../public/img/starcraft2Background1.jpg",
                      "../public/img/starcraft2Background2.jpg",
                      "../public/img/starcraft2Background3.jpg"};
  var random = Math.getRandomInt(0, 3);

  $("button#league").hover(
    function() {
      random = Math.getRandomInt(0,3);
      $("img#background").attr("src", leagueBg[random]);
    });
  $("button#overwatch").hover(
    function() {
      random = Math.getRandomInt(0,3);
      $("img#background").attr("src", overwatchBg[random]);
    });
  $("button#starcraft2").hover(
    function() {
      random = Math.getRandomInt(0,3);
      $("img#background").attr("src", starcraft2Bg[random]);
    });

  $("button#league").click(
    function() {
      // Changes the background to the League background
      $("img#background").attr("src", leagueBg[random]);

      // Reveals the League form and hides all the others
      $("form#league").show();
      $("form#overwatch").hide();
      $("form#starcraft2").hide();
    });
  $("button#overwatch").click(
    function() {
      // Changes the background to the Overwatch background
      $("img#background").attr("src", overwatchBg[random]);

      // Reveals the Overwatch form and hides all the others
      $("form#league").hide();
      $("form#overwatch").show();
      $("form#starcraft2").hide();
    });
  $("button#starcraft2").click(
    function() {
      // Changes the background to the Starcraft 2 background
      $("img#background").attr("src", starcraft2Bg[random]);

      // Reveals the Starcraft 2 form and hides all the others
      $("form#league").hide();
      $("form#overwatch").hide();
      $("form#starcraft2").show();
    });
});
