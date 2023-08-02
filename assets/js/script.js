// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add code to display the current date in the header of the page.
  // var currentDay = dayjs().format('dddd, MM/DD/YYYY');
  $('#currentDay').text(dayjs().format('dddd // MM • DD • YYYY'));
});

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveButton() {
  $('.saveBtn').click(function(){
    var task = $(this).siblings(".description").val(); // siblings of saveBtn clicked, with a class called description. will save value of text area
    var hourBlock = $(this).parent().attr("id"); // looks for the parent of the saveBtn clicked, saves the id 

    localStorage.setItem(hourBlock, task) // saves the contents of task and hour of saveBtn clicked to local storage

  })
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  function loadSave() {
  // for each element with the time-block class...
  $('.time-block').each(function() {
    // ... set the text area of the corresponding hour id to the saved value
$('.description').text(localStorage.getItem(hourBlock, task)) // not sure how to make it work
console.log(this)

})
  }


  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

function colorCoding() {
  // for each element with the time-block class...
  $('.time-block').each(function () {
    // ...remove the string "hour-" from the id, and blockHour equals what remains
    var blockHour = this.dataset.hour; // But I can't figure out exactly how to do that. 
    // assuming I have to use split or replace but I don't know the syntax needed to specifically grab
    // the id's i want within the html.
    var currentHour = dayjs().hour();
    console.log(blockHour);
    console.log($(this).children("textArea"))

// if the blockHour is the same as currentHour, add the class "present", remove "past" and "future"
  if (currentHour == blockHour) {
    $(this).children("textArea").addClass("present")
    $(this).children("textArea").removeClass("past")
    $(this).children("textArea").removeClass("future")
  }

// if the blockHour is before the currentHour, add the class "past", remove "present" and "future"
  if (currentHour > blockHour) {
    $(this).children("textArea").addClass("past")
    $(this).children("textArea").removeClass("present")
    $(this).children("textArea").removeClass("future")
  }

//if the blockHour is later than the currentHour, add the class "future", remove "present" and "past"
  if (currentHour < blockHour) {
    $(this).children("textArea").addClass("future")
    $(this).children("textArea").removeClass("past")
    $(this).children("textArea").removeClass("present")
  }

})
}

saveButton();
colorCoding();
