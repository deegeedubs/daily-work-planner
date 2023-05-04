// Ensures that the code does not run until everything is entered
$(function () {
  var today = dayjs();
  var currentHour = dayjs().hour()
  var firstHour = 8;
  var textToSave;

// Displays the current date in the specified format
  $('#currentDay').text(today.format('MMMM DD, YYYY'));

  // Function to save text entered into local storage
  $('.time-block').children('.btn').each(function(index){
    var storageText = "hour-" + (index+8) + "-text";
    $(this).click(function(){
      textToSave = $(this).parent().children('.description').val();
      console.log(textToSave);
      localStorage.setItem(storageText, textToSave);
    })
  })
  
// Function to color code each time block as past, present, or future
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

// Function to retrieve previously saved text from local storage
  $('.description').each(function(index){
    var storageText = "hour-" + (index+8) + "-text";
    $(this).val(localStorage.getItem(storageText));
  })

});