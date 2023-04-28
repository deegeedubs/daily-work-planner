// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs();
  // var currentHour = dayjs().hour()
  var currentHour = 12;
  var firstHour = 8;
  var textToSave;

  $('.time-block').children('.btn').each(function(index){
    var storageText = "hour-" + (index+8) + "-text";
    $(this).click(function(){
      textToSave = $(this).parent().children('.description').val();
      console.log(textToSave);
      localStorage.setItem(storageText, textToSave);
    })
  })
  

  $('.time-block').each(function(index){
    var checkHour = index + firstHour;
    if (checkHour < currentHour){
      $(this).addClass("past");
    } else if (checkHour == currentHour){
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  })

  $('.description').each(function(index){
    var storageText = "hour-" + (index+8) + "-text";
    $(this).val(localStorage.getItem(storageText));
  })


  $('#currentDay').text(today.format('MMMM DD, YYYY'));
});
