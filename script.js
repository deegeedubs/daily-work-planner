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
  


  var currentHour = dayjs().hour()
  var firstHour = 8;
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time

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



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  $('#currentDay').text(today.format('MMMM DD, YYYY'));
});
