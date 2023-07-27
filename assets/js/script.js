// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  var currentDay = dayjs().format('dddd, MM/DD/YYYY');
  $('#currentDay').text(dayjs().format('dddd, MM/DD/YYYY'));



  var currentHour = dayjs().hour();
  var timeBlock = $('.time-block');
  var saveBtn = $('.saveBtn');
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.addEventListener("click", function(){
    var hour = $(this).siblings(".description").val();
    var task = $(this).parent().attr("id");

    localStorage.setItem(hour, task)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  // for each element with the time-block class...
  timeBlock.each(function () {
    // ...remove the string "hour-" from the id, and blockHour equals what remains
    var blockHour = "" // But I can't figure out exactly how to do that


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
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  




});
