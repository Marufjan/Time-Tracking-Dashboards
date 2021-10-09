"use strict";

const btns = document.querySelectorAll("li");
const hours = document.querySelectorAll(".hours");
const prevHours = document.querySelectorAll(".last-week-hours");

fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const work = data[0].timeframes;
    const play = data[1].timeframes;
    const study = data[2].timeframes;
    const exercise = data[3].timeframes;
    const social = data[4].timeframes;
    const care = data[5].timeframes;

    let weeklyDefault = function () {
      btns[0].classList.remove("active");
      btns[1].classList.add("active");
      btns[2].classList.remove("active");

      hours.forEach((hour, index, arr) => {
        arr[0].textContent = work.weekly.current + "hrs";
        arr[1].textContent = play.weekly.current + "hrs";
        arr[2].textContent = study.weekly.current + "hrs";
        arr[3].textContent = exercise.weekly.current + "hrs";
        arr[4].textContent = social.weekly.current + "hrs";
        arr[5].textContent = care.weekly.current + "hrs";
      });

      prevHours.forEach((h, index, prevArr) => {
        prevArr[0].textContent = "Last Week - " + work.weekly.previous + "hrs";
        prevArr[1].textContent = "Last Week - " + play.weekly.previous + "hrs";
        prevArr[2].textContent = "Last Week - " + study.weekly.previous + "hrs";
        prevArr[3].textContent =
          "Last Week - " + exercise.weekly.previous + "hrs";
        prevArr[4].textContent =
          "Last Week - " + social.weekly.previous + "hrs";
        prevArr[5].textContent = "Last Week - " + care.weekly.previous + "hrs";
      });
    };

    window.onload = weeklyDefault();

    btns.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        // btn.classList.toggle("active");
        console.log(btn);
        console.log(e.currentTarget);

        if (btn.classList.contains("daily")) {
          btns[0].classList.add("active");
          btns[1].classList.remove("active");
          btns[2].classList.remove("active");

          hours.forEach((hour, index, arr) => {
            arr[0].textContent = work.daily.current + "hrs";
            arr[1].textContent = play.daily.current + "hrs";
            arr[2].textContent = study.daily.current + "hrs";
            arr[3].textContent = exercise.daily.current + "hrs";
            arr[4].textContent = social.daily.current + "hrs";
            arr[5].textContent = care.daily.current + "hrs";
          });

          prevHours.forEach((h, index, prevArr) => {
            prevArr[0].textContent =
              "Yesterday - " + work.daily.previous + "hrs";
            prevArr[1].textContent =
              "Yesterday - " + play.daily.previous + "hrs";
            prevArr[2].textContent =
              "Yesterday - " + study.daily.previous + "hrs";
            prevArr[3].textContent =
              "Yesterday - " + exercise.daily.previous + "hrs";
            prevArr[4].textContent =
              "Yesterday - " + social.daily.previous + "hrs";
            prevArr[5].textContent =
              "Yesterday - " + care.daily.previous + "hrs";
          });
        }

        if (btn.classList.contains("weekly")) {
          weeklyDefault();
        }

        if (btn.classList.contains("monthly")) {
          btns[0].classList.remove("active");
          btns[1].classList.remove("active");
          btns[2].classList.add("active");

          hours.forEach((hour, index, arr) => {
            arr[0].textContent = work.monthly.current + "hrs";
            arr[1].textContent = play.monthly.current + "hrs";
            arr[2].textContent = study.monthly.current + "hrs";
            arr[3].textContent = exercise.monthly.current + "hrs";
            arr[4].textContent = social.monthly.current + "hrs";
            arr[5].textContent = care.monthly.current + "hrs";
          });

          prevHours.forEach((h, index, prevArr) => {
            prevArr[0].textContent =
              "Last Month - " + work.monthly.previous + "hrs";
            prevArr[1].textContent =
              "Last Month - " + play.monthly.previous + "hrs";
            prevArr[2].textContent =
              "Last Month - " + study.monthly.previous + "hrs";
            prevArr[3].textContent =
              "Last Month - " + exercise.monthly.previous + "hrs";
            prevArr[4].textContent =
              "Last Month - " + social.monthly.previous + "hrs";
            prevArr[5].textContent =
              "Last Month - " + care.monthly.previous + "hrs";
          });
        }
      });
    });
  });
