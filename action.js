// Animate scroll code

// $(document).ready(function() {
//    $('#nav').localScroll({duration:800});
// });


// pressing enter in search bar takes user to search results

$("#loginSubmit").click(function(){
  $("#loginlockBar").addClass("lockbarmove");
  $("#loginlock").addClass("lockmove");

});


var searchbar = document.getElementById("searchbar");

searchbar.addEventListener("keyup" , function(e){
 e.preventDefault();
  if (e.keyCode === 13)
  {
   window.location = "search.html"; }
 }
 );

// $('#pageOne').click(function(){
//   $('#searchPgOne').show();
//   $('#searchPgTwo').hide();
//   $('#searchPgThree').hide();
// });
//
// $('#pageTwo').click(function(){
//   $('#searchPgOne').hide();
//   $('#searchPgTwo').show();
//   $('#searchPgThree').hide();
// });
//
// $('#pageThree').click(function(){
//   $('#searchPgOne').hide();
//   $('#searchPgTwo').hide();
//   $('#searchPgThree').show();
// });

// $('#searchbar').keyup(function(event){
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if(keycode == '13'){
//         $(location).attr('href','http://google.com');
//     }
// });

// jquery version that I cant get to work, co I'm sticking with vanilla js
// $("#searchbar").keyup(function(e){
//   if (e.keyCode == 13)
//   {
//    window.location.href = 'search.html';
// });




// Code to animate the active box on the search page...ran out of time, but may come back to it

// var $pageOne = $("#pageOne");
// var $pageTwo = $("#pageTwo");
// var $pageThree = $("#pageThree");
// var $currentPage = $("#currentPage");
//
//
// $pageOne.click(function(){
// $x = $currentPage.position;
// if ($x = 16.75%){
// $currentPage.addClass("moveToOneTwo");
// $currentPage.addClass("moveToOneThree");
// $currentPage.removeClass("moveToTwoOne");
// $currentPage.removeClass("moveToThreeOne");
// $currentPage.removeClass("moveToTwoThree");
// $currentPage.removeClass("moveToThreeTwo");
// }
// });
//
// $pageTwo.click(function(){
// $currentPage.addClass("moveToTwoOne");
// $currentPage.addClass("moveToTwoThree");
// $currentPage.removeClass("moveToOneTwo");
// $currentPage.removeClass("moveToOneThree");
// $currentPage.removeClass("moveToThreeOne");
// $currentPage.removeClass("moveToThreeTwo");
// });
//
//
// $pageThree.click(function(){
// $currentPage.addClass("moveToThreeOne");
// $currentPage.addClass("moveToThreeTwo");
// $currentPage.removeClass("moveToOneTwo");
// $currentPage.removeClass("moveToOneThree");
// $currentPage.removeClass("moveToTwoOne");
// $currentPage.removeClass("moveToTwoThree");
//
//
// });
