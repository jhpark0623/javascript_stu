let hour = 23;
let minute = 59;
let second = 0;
let quit;

const timerId = setInterval(() => {
  second++;
  if (second === 60) {
    minute++;
    second = 0;
  }
  if (minute === 60) {
    hour++;
    minute = 0;
  }
  if (hour === 24) {
    hour = 0;
  }

  // document.getElementsByTagName("span")[0].innerText = hour
  //   .toString()
  //   .padStart(2, "0");
  // document.getElementsByTagName("span")[2].innerText = minute
  //   .toString()
  //   .padStart(2, "0");
  // document.getElementsByTagName("span")[4].innerText = second
  //   .toString()
  //   .padStart(2, "0");

  // document.getElementById("hour").innerText = hour.toString().padStart(2, "0");
  // document.getElementById("min").innerText = minute.toString().padStart(2, "0");
  // document.getElementById("sec").innerText = second.toString().padStart(2, "0");

  document.querySelector(".hour").innerText = hour.toString().padStart(2, "0");
  document.querySelector(".min").innerText = minute.toString().padStart(2, "0");
  document.querySelector(".sec").innerText = second.toString().padStart(2, "0");

  // console.log(
  //   `${hour.toString().padStart(2, "0")}:${minute
  //     .toString()
  //     .padStart(2, "0")}:${second.toString().padStart(2, "0")}`
  // );
}, 1000);
