
$(function () {
  $('#currentDay').text(dayjs().format('dddd // MM • DD • YYYY'));
});



// when the save button is clicked, data in the text area is saved to local storage
  $('.saveBtn').click(function () {
    var task = $(this).siblings(".description").val(); // siblings of saveBtn clicked, with a class called description. will save value of text area
    var hour = $(this).parent().attr("id"); // looks for the parent of the saveBtn clicked, saves the id 
    localStorage.setItem(hour, task) // saves the contents of task and hour of saveBtn clicked to local storage
  })


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?

function loadSave() {
// getItem from each hour (if there is any value there) and set the text of the corresponding hour to the saved value
    $("#hour-9 .description").text(localStorage.getItem('hour-9'))
    $("#hour-10 .description").text(localStorage.getItem('hour-10'))
    $("#hour-11 .description").text(localStorage.getItem('hour-11'))
    $("#hour-12 .description").text(localStorage.getItem('hour-12'))
    $("#hour-13 .description").text(localStorage.getItem('hour-13'))
    $("#hour-14 .description").text(localStorage.getItem('hour-14'))
    $("#hour-15 .description").text(localStorage.getItem('hour-15'))
    $("#hour-16 .description").text(localStorage.getItem('hour-16'))
    $("#hour-17 .description").text(localStorage.getItem('hour-17'))
  }





// color code the text area based on the time of day
function colorCoding() {
  // for each element with the time-block class...
  $('.time-block').each(function () {
    // ... grab the number in the data attribute "hour" and call it blockHour
    var blockHour = this.dataset.hour;
    var currentHour = dayjs().hour();

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



colorCoding();
loadSave()

