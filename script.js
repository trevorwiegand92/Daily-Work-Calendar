$(document).ready(function () {

  let currentDayAndTime = $("#currentDay");

  //function that creates the date and time tracker in the jumbotron.//
  function dateAndTime() {
    let now = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    currentDayAndTime.text(now);
  }

  //this function displays quick message letting the user know that their appointment was saved to local storage.//
  function showStored() {
    $("#stored").show().delay(1000).fadeOut();
}

  // this function changes the color of each timeblock based on the time of day.//
  function rowColor() {
 
    let theHour = new Date().getHours();
  

    for (i = 9; i < 18; i++) {
      let checkTime = $(`#hour${i}`);

      if (theHour > i) {
        checkTime.addClass(".past");
      }
      else if (theHour < i) {
        checkTime.addClass(".future");
      }
      else {
        checkTime.addClass(".present");
      }
    }
  }

  // this function runs the function to display the saved appointment message and saves the user input data into local storage.//
  function saveAppointments() {
    showStored();

    let block9 = document.querySelector("#info9").value;
    localStorage.setItem("hour9", block9);

    let block10 = document.querySelector("#info10").value;
    localStorage.setItem("hour10", block10);

    let block11 = document.querySelector("#info11").value;
    localStorage.setItem("hour11", block11);

    let block12 = document.querySelector("#info12").value;
    localStorage.setItem("hour12", block12);

    let block13 = document.querySelector("#info13").value;
    localStorage.setItem("hour13", block13);

    let block14 = document.querySelector("#info14").value;
    localStorage.setItem("hour14", block14);

    let block15 = document.querySelector("#info15").value;
    localStorage.setItem("hour15", block15);

    let block16 = document.querySelector("#info16").value;
    localStorage.setItem("hour16", block16);

    let block17 = document.querySelector("#info17").value;
    localStorage.setItem("hour17", block17);

    let block18 = document.querySelector("info18").value;
    localStorage.setItem("hour18", block18);

  }

  //this function displays what data has been saved into local storage by the user when the page loads.//
  function showSavedAppointments() {
    let textRow9 = document.querySelector("#info9");
    let savedTask9 = localStorage.getItem("hour9");
    textRow9.textContent = savedTask9;

    let textRow10 = document.querySelector("#info10");
    let savedTask10 = localStorage.getItem("hour10");
    textRow10.textContent = savedTask10;

    let textRow11 = document.querySelector("#info11");
    let savedTask11 = localStorage.getItem("hour11");
    textRow11.textContent = savedTask11;

    let textRow12 = document.querySelector("#info12");
    let savedTask12 = localStorage.getItem("hour12");
    textRow12.textContent = savedTask12;

    let textRow13 = document.querySelector("#info13");
    let savedTask13 = localStorage.getItem("hour13");
    textRow13.textContent = savedTask13;

    let textRow14 = document.querySelector("#info14");
    let savedTask14 = localStorage.getItem("hour14");
    textRow14.textContent = savedTask14;

    let textRow15 = document.querySelector("#info15");
    let savedTask15 = localStorage.getItem("hour15");
    textRow15.textContent = savedTask15;

    let textRow16 = document.querySelector("#info16");
    let savedTask16 = localStorage.getItem("hour16");
    textRow16.textContent = savedTask16;

    let textRow17 = document.querySelector("#info17");
    let savedTask17 = localStorage.getItem("hour17");
    textRow17.textContent = savedTask17;

    let textRow18 = document.querySelector("#info18");
    let savedTask18 = localStorage.getItem("hour18");
    textRow18.textContent = savedTask18;
  }

  //this is the initial function that runs when the page first loads, it starts the date and time tracker, shows what data has been saved to 
  //local storage, and changes the colors of rows depending if the time is past, present, or future.//
  function init() {
    setInterval(dateAndTime, 1000);
    showSavedAppointments();
    rowColor();
  }

  init();

  //this is the event listener that allows the user to hit the save button.//
  $(".saveBtn").on("click", saveAppointments);
});