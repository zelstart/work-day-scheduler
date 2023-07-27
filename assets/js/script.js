// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('dddd, MM/DD/YYYY');
  $('#currentDay').text(dayjs().format('dddd // MM • DD • YYYY'));




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $('.saveBtn').click(function(){
    var task = $(this).siblings(".description").val(); // siblings of saveBtn clicked, with a class called description. will save value of text area
    var hour = $(this).parent().attr("id"); // looks for the parent of the saveBtn clicked, saves the id 

    localStorage.setItem(hour, task) // saves the contents of task and hour of saveBtn clicked to local storage

  })


    // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // for each element with the time-block class...
  $('.time-block').each(function() {
    // ... set the text area of the corresponding hour id to the saved value
$('.description').text
localStorage.getItem(hour, task)
})



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // for each element with the time-block class...
  $('.time-block').each(function () {
    // ...remove the string "hour-" from the id, and blockHour equals what remains
    var blockHour = "" // But I can't figure out exactly how to do that
    var currentHour = dayjs().hour();

// if the blockHour is the same as currentHour, add the class "present", remove "past" and "future"
  if (currentHour === blockHour) {
    $(this).addClass("present")
    $(this).removeClass("past")
    $(this).removeClass("future")
  }

// if the blockHour is before the currentHour, add the class "past", remove "present" and "future"
  if (currentHour > blockHour) {
    $(this).addClass("past")
    $(this).removeClass("present")
    $(this).removeClass("future")
  }

//if the blockHour is later than the currentHour, add the class "future", remove "present" and "past"
  if (currentHour < blockHour) {
    $(this).addClass("future")
    $(this).removeClass("past")
    $(this).removeClass("present")
  }

})

  




});
